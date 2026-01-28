import "./Login.scss";
import InputField from "../components/InputField";
import { useState } from "preact/hooks";
import { useAuth } from "../hooks/useAuth";
import { useApi } from "../hooks/useApi";
import { login as loginRequest } from "../../../libs/sdk/sdk.gen";
import { isErrorResponse } from "../utils/utlis";
import { client } from "../../../libs/sdk/client.gen";

export function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useAuth();
    const { request } = useApi();

    const handleSubmit = async (e: Event) => {
        e.preventDefault();

        const response = await request(loginRequest, { body: { email, password } });

        if (!response || response.error || !response.data?.data) {
            return;
        }

        if (isErrorResponse(response.data.data)) {
            return;
        }
        const token = response.data.data.token;

        login({ email, token: token });
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
