import { Head } from "$fresh/runtime.ts";
import LoginForm from "../islands/LoginForm.tsx";
import Navbar from '../components/Navbar.tsx';
export default function Login(){
    return (
    <>
      <Head>
          <link rel="stylesheet" href="/style.css" />
          <title>Garrasi - Login</title>
      </Head>
        <Navbar />
      <div class="p-4 mx-auto max-w-screen-md">
          <LoginForm/>
      </div>
    </>
  );

}