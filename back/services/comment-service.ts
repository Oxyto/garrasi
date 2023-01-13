import db from "../config/config.ts";
import type { Comment } from "../types/comment.ts";

export async function createComment(comment: Comment) {
  await db.set(
    `comment:${comment.userName}:${comment.site}`,
    JSON.stringify(comment)
  );
}

export async function deleteComment(
  commentKey: string | null
): Promise<boolean> {
  if (commentKey) return Boolean(await db.del(commentKey));
  return false;
}

export async function getComments(comments: string[]): Promise<Comment[]> {
  if (comments.length === 0) return [];

  const dbResponse = await db.mget(...comments);

  return dbResponse
    .filter((comment) => comment !== null)
    .map((comment) => JSON.parse(comment ?? "null"));
}

export async function listComments(
  next: number,
  count: number,
  userName: string,
  site: string
) {
  return await db.scan(next, {
    pattern: `comment:${userName || "*"}:${site}*`,
    count: count,
  });
}
