import db from "../config/config.ts";
import { verify } from "djwt";

async function createKey(): Promise<CryptoKey> {
  const key = new CryptoKey();

  await db.set("jwt-key", JSON.stringify(key));
  return key;
}

export async function getKey(): Promise<CryptoKey> {
  const dbResponse = await db.get("jwt-key");

  if (dbResponse) {
    const key = JSON.parse(dbResponse);

    return key;
  }
  const key = await createKey();

  return key;
}

export async function verifyKey(jwt: string): Promise<boolean> {
  const key = await getKey();

  return Boolean(await verify(jwt, key));
}
