import { Handlers } from "$fresh/server.ts";
import { listByUserName } from "../services/user-service.ts";
import { verifyKey } from "../services/key-service.ts";

export const handler: Handlers = {
  async GET(req: Request) {
    const jwt = new URL(req.url).searchParams.get("token");
    const userName = new URL(req.url).searchParams.get("username");

    if (jwt && userName && (await verifyKey(jwt))) {
      return Response.json(await listByUserName(userName));
    }
    return Response.json({ error: "Invalid credentials" }, { status: 403 });
  },
};
