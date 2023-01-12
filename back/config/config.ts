import { connect } from "redis";

const db = await connect({
  hostname: "127.0.0.1",
});

export default db;
