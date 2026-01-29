import styles from "./Login.module.scss";
import InputField from "../components/InputField";
import { useState } from "preact/hooks";
import { useAuth } from "../hooks/useAuth";
import { useApi } from "../hooks/useApi";
import { login as loginRequest } from "../../../libs/sdk/sdk.gen";
import { isErrorResponse } from "../utils/utlis";

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
        <main className={styles.container}>
            <section className={styles.panel}>
                <h1 className={styles.title}>Welcome back :)</h1>
                <p className={styles.subtitle}>Type in your email and password</p>
                <form className={styles.loginForm} onSubmit={handleSubmit}>
                    <InputField type="email" placeholder="Email" value={email} onChange={setEmail} />
                    <InputField type="password" placeholder="Password" value={password} onChange={setPassword} />
                    <button type="submit" className={styles.button}>
                        Sign in
                    </button>
                </form>
                <div className={styles.spacer} />
            </section>
        </main>
    );
}
