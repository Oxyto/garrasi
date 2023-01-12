import { Handlers } from "$fresh/server.ts";
import { listAllComments } from "../services/comment-service.ts";
import { verifyKey } from "../services/key-service.ts";

export const handler: Handlers = {
  async GET(req: Request) {
    const jwt = new URL(req.url).searchParams.get("token");
    const next = Number(new URL(req.url).searchParams.get("next") || 0);
    const count = Number(new URL(req.url).searchParams.get("count") || 10);

    if (jwt && await verifyKey(jwt)) {
      return Response.json(await listAllComments(next, count));
    }
    return Response.json({ error: "Invalid credentials" }, { status: 403 });
  },
};
