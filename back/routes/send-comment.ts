import { Handlers } from "$fresh/server.ts";
import { verify } from "djwt";
import { createComment } from "../services/comment-service.ts";
import { getKey } from "../services/key-service.ts";
import type { Comment } from "../types/comment.ts";

export const handler: Handlers = {
  async POST(req: Request) {
    const [token, comment] = (await req.json()) as [string, Comment];
    const key = await getKey();

    if (await verify(token, key)) {
      await createComment(comment);
      return new Response("OK");
    }
    return Response.json({ error: "Invalid credentials" }, { status: 403 });
  },
};
