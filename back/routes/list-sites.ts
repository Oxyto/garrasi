import { Handlers } from "$fresh/server.ts";
import { listBySite } from "../services/user-service.ts";
import { verifyKey } from "../services/key-service.ts";

export const handler: Handlers = {
  async GET(req: Request) {
    const jwt = new URL(req.url).searchParams.get("token");
    const site = new URL(req.url).searchParams.get("site");

    if (site && jwt && (await verifyKey(jwt))) {
      return Response.json(await listBySite(site));
    }
    return Response.json({ error: "Invalid credentials" }, { status: 403 });
  },
};
