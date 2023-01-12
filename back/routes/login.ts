import { Handlers } from "$fresh/server.ts";
import { create } from "djwt";
import { getKey } from "../services/key-service.ts";
import { isUserValid } from "../services/user-service.ts";
import type { UserAccount } from "../types/user.ts";

export const handler: Handlers = {
  async POST(req: Request) {
    try {
      const user: UserAccount = await req.json();
      const key = await getKey();

      if (await isUserValid(user)) {
        return Response.json({
          token: await create(
            { alg: "HS256", typ: "JWT" },
            {
              userName: user.userName,
            },
            key,
          ),
        });
      }
      return Response.json({ error: "Invalid credentials" }, { status: 403 });
    } catch (error) {
      console.error(error);
      return Response.json({ error: "Invalid body" }, { status: 400 });
    }
  },
};
