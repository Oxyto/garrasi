import db from "../config/config.ts";
import type { Comment } from "../types/comment.ts";

export async function createComment(comment: Comment): Promise<boolean> {
  return Boolean(
    await db.setnx(
      `comment:${comment.userName}:${comment.site}`,
      comment.commentText
    )
  );
}

export async function getComments(comments: string[]): Promise<Comment[]> {
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
    pattern: `comment:${userName || '*'}:${site}*`,
    count: count,
  });
}
