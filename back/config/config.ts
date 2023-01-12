import { connect } from "redis";

const db = await connect({
  hostname: Deno.env.get("DB_HOST") || "127.0.0.1",
  port: Number(Deno.env.get("DB_PORT") || 6379),
});

export default db;
