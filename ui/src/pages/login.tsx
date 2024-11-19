import './Login.scss';
import InputField from '../components/InputField';
import { useState } from 'preact/hooks';
import { useAuth } from '../context/useAuth';
import { useApiClient } from '../utils/apiClient';

export function Login() {
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let { fetchWithAuth } = useApiClient();

    let { login } = useAuth();

    const handleSubmit = async (e: Event) => {
        e.preventDefault();

        try {
            const response = await fetchWithAuth('http://localhost:3000/login', 'POST', JSON.stringify({ email, password }));

            if (response.ok) {
                const result = await response.json();

                if ("token" in result) {
                    login({ email, token: result.token });
                }
            }
        } catch (error) { }
    };

    return (<main class="container">
        <section class="panel">
            <h1 class="title">Welcome back :)</h1>
            <p class="subtitle">Type in your email and password</p>
            <form onSubmit={handleSubmit}>
                <InputField
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={setEmail}
                />
                <InputField
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={setPassword}
                />
                <button type="submit" class="button">Sign in</button>
            </form>
            <div class="spacer" />
        </section>
    </main>);
};
