import { render } from 'preact';

export function App() {
    return (
        <div>
            <h1>Hello, World!</h1>
        </div>
    );
}

render(<App />, document.getElementById('app'));
