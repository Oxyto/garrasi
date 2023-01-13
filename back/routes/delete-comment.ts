import { Handlers } from "$fresh/server.ts";
import { deleteComment } from "../services/comment-service.ts";
import { verifyKey } from "../services/key-service.ts";

export const handler: Handlers = {
  async POST(req: Request) {
    try {
      const jwt = new URL(req.url).searchParams.get("token");
      const commentKey = new URL(req.url).searchParams.get("commentkey")

      if (jwt && commentKey && (await verifyKey(jwt))) {
        return Response.json(await deleteComment(commentKey));
      }
      return Response.json({ error: "Invalid credentials" }, { status: 403 });
    } catch (error) {
      console.error(error);
      return Response.json({ error: "Invalid body" }, { status: 400 });
    }
  },
};
