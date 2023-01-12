import db from "../config/config.ts";
import { sha256 } from "sha256";
import type { UserAccount } from "../types/user.ts";

export async function createUser(user: UserAccount): Promise<boolean> {
  const userToDB = JSON.stringify({
    userName: user.userName,
    email: user.email,
    password: sha256(user.password),
  });

  return Boolean(
    await db.setnx(`account:${user.userName}`, JSON.stringify(userToDB)),
  );
}

export async function isUserValid(user: UserAccount): Promise<boolean> {
  const fetchUser = await db.get(`account:${user.userName}`);

  if (fetchUser) {
    const fetchPassword = JSON.parse(fetchUser).password;
    const password = sha256(user.password);

    return fetchPassword === password;
  }
  return false;
}

export async function getUserByName(
  userName: string,
): Promise<UserAccount | null> {
  const userDB = await db.get(`account:${userName}`);

  if (userDB) {
    const user = JSON.parse(userDB);

    return user;
  }
  return null;
}
