import "./Login.scss";
import InputField from "../components/InputField";
import { useState } from "preact/hooks";
import { useAuth } from "../hooks/useAuth";

export function Login() {
    // State variables for email and password
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

    // Get the login function from the authentication hook
    let { login } = useAuth();

    // Handle form submission
    const handleSubmit = async (e: Event) => {
        e.preventDefault();

        try {
            // Send login request to the server
            const response = await fetch(import.meta.env.VITE_BACKEND_URL + "/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const result = await response.json();

                // If the response contains a token, log the user in
                if ("token" in result) {
                    login({ email, token: result.token });
                }
            }
        } catch (error) {
            // Handle errors here (e.g., show an error message)
        }
    };

    return (
        <main class="container">
            <section class="panel">
                <h1 class="title">Welcome back :)</h1>
                <p class="subtitle">Type in your email and password</p>
                <form class="login-form" onSubmit={handleSubmit}>
                    <InputField type="email" placeholder="Email" value={email} onChange={setEmail} />
                    <InputField type="password" placeholder="Password" value={password} onChange={setPassword} />
                    <button type="submit" class="button">
                        Sign in
                    </button>
                </form>
                <div class="spacer" />
            </section>
        </main>
    );
}
