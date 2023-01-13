import { useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";
import { connect, set } from "https://deno.land/x/redis/mod.ts";

export default function SignupForm() {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [error, setError] = useState("");


    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== passwordConfirmation) {
            setError("Password confirmation does not match");
            return;
        }
        // insert into redis
        try {
            const redis = await connect({
                hostname: "127.0.0.1",
                port: 6379,
            });
            await redis.set(`user:${username}`, JSON.stringify({ email, password }));
            // handle success

        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <form class="flex flex-col gap-2" onSubmit={handleSubmit}>
            {error && <div class="error">{error}</div>}
            <input
                type="email"
                value={email}
                onInput={(e) => setEmail(e.currentTarget.value)}
                placeholder="Email"
            />
            <input
                type="username"
                value={username}
                onInput={(e) =>setUsername(e.currentTarget.value)}
                placeholder="Username"
            />
            <input
                type="password"
                value={password}
                onInput={(e) => setPassword(e.currentTarget.value)}
                placeholder="Password"
            />
            <input
                type="password"
                value={passwordConfirmation}
                onInput={(e) => setPasswordConfirmation(e.currentTarget.value)}
                placeholder="Confirm Password"
            />
            <Button type="submit">Sign Up</Button>
        </form>
    );
}
