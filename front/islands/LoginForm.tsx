import { useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form class="flex flex-col gap-2">
      <input
        type="username"
        value={username}
        onInput={(e) => setUsername(e.currentTarget.value)}
        placeholder="username"
      />
      <input
        type="password"
        value={password}
        onInput={(e) => setPassword(e.currentTarget.value)}
        placeholder="Password"
      />
      <Button type="submit">Log In</Button>
    </form>
  );
}
