import { Handlers } from "$fresh/server.ts";
import { create } from "djwt";
import { createUser } from "../services/user-service.ts";
import { getKey } from "../services/key-service.ts";
import type { UserAccount } from "../types/user.ts";

export const handler: Handlers = {
  async POST(req: Request) {
    const user: UserAccount = await req.json();
    const key = await getKey();

    if (await createUser(user)) {
      return Response.json({
        token: await create({ alg: "HS256" }, { userName: user.userName }, key),
      });
    }
    return Response.json({ error: "Account already exists." }, { status: 409 });
  },
};
