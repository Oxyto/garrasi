// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/create-account.ts";
import * as $1 from "./routes/get-comments.ts";
import * as $2 from "./routes/list-comments.ts";
import * as $3 from "./routes/login.ts";
import * as $4 from "./routes/send-comment.ts";

const manifest = {
  routes: {
    "./routes/create-account.ts": $0,
    "./routes/get-comments.ts": $1,
    "./routes/list-comments.ts": $2,
    "./routes/login.ts": $3,
    "./routes/send-comment.ts": $4,
  },
  islands: {},
  baseUrl: import.meta.url,
  config,
};

export default manifest;
