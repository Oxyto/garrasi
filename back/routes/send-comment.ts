import { Handlers } from "$fresh/server.ts";
import { verify } from "djwt";
import { createComment } from "../services/comment-service.ts";
import { getKey } from "../services/key-service.ts";
import type { Comment } from "../types/comment.ts";

export const handler: Handlers = {
  async POST(req: Request) {
    try {
      const token = new URL(req.url).searchParams.get("token");
      const comment: Comment = await req.json();
      const key = await getKey();

      if (token && (await verify(token, key))) {
        await createComment(comment);
        return new Response("OK");
      }
      return Response.json({ error: "Invalid credentials" }, { status: 403 });
    } catch (error) {
      console.error(error);
      return Response.json({ error: "Invalid body" }, { status: 400 });
    }
  },
};
