import db from "../config/config.ts";
import { verify } from "djwt";

async function createKey(): Promise<CryptoKey> {
  const key: CryptoKey = await crypto.subtle.generateKey(
    { name: "HMAC", hash: "SHA-256" },
    true,
    ["sign", "verify"],
  );

  await db.set(
    "jwt-key",
    JSON.stringify(await crypto.subtle.exportKey("jwk", key)),
  );
  return key;
}

export async function getKey(): Promise<CryptoKey> {
  const dbResponse = await db.get("jwt-key");

  if (dbResponse) {
    const key = await crypto.subtle.importKey(
      "jwk",
      JSON.parse(dbResponse),
      { name: "HMAC", hash: "SHA-256" },
      true,
      ["sign", "verify"],
    );

    return key;
  }
  const key = await createKey();

  return key;
}

export async function verifyKey(jwt: string): Promise<boolean> {
  const key = await getKey();

  return Boolean(await verify(jwt, key));
}
