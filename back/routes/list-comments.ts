import { Handlers } from "$fresh/server.ts";
import { listAllComments } from "../services/comment-service.ts";
import { verifyKey } from "../services/key-service.ts";

export const handler: Handlers = {
  async GET(req: Request) {
    const jwt = new URL(req.url).searchParams.get("token");

    if (jwt && await verifyKey(jwt)) {
      return Response.json(await listAllComments());
    }
    return Response.json({ error: "Invalid credentials" }, { status: 403 });
  },
};
