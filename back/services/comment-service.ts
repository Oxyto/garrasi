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

  return dbResponse.map((comment) => JSON.parse(comment ?? ""));
}

export async function listAllComments(next: number, count: number) {
  return await db.scan(next, { pattern: `comment:*:*`, count: count });
}
