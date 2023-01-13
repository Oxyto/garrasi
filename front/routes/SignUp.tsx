import { useEffect } from "preact/hooks";
import SignupForm from "../islands/SignupForm.tsx";
import Navbar from '../components/Navbar.tsx';
import { connect, set } from "https://deno.land/x/redis/mod.ts";
import { Head } from "$fresh/runtime.ts";

export default function Signup(){
  const handleSubmit = async (email, username, password) => {
    const redis = await connect({
      hostname: "127.0.0.1",
      port: 6379,
    });
    await redis.set(`user:${username}`, JSON.stringify({ email, password }));
    route("/home");
  };
  return (
      <>
        <Head>
          <title>Garrasi</title>
          <link rel="stylesheet" href="/style.css" />
        </Head>
        <Navbar />
        <div class="p-4 mx-auto max-w-screen-md">
          <SignupForm handleSubmit={handleSubmit}/>
        </div>
      </>
  );
}
