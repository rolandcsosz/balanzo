# Balanzo

Yet another personal finance manager application. The main goal was to create a simple, easy-to-use, and cross-platform application for trcking my own finances.

## Project Structure

- **`backend`**: Node.js, Express, and PostgreSQL based API.
- **`frontend`**: Vite, React, and Tauri based frontend.
- **`e2e`**: End-to-end tests.
- **`libs`**: Shared libraries for e2e test and frontend. Generates types from the backend.

## Prerequisites

- **Node.js**: (Latest LTS recommended)
- **Docker**: For running the database and potentially the whole stack.

## Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/rolandcsosz/balanzo.git
    cd balanzo
    ```

2.  **Install dependencies:**
    Run this in the root directory to install dependencies for all workspaces.
    ```bash
    npm install
    ```

3.  **Setup Environment:**
    Refer to the `backend` and `frontend` directories for specific `.env` setup instructions and development configurations.

## Docker

You can use Docker Compose to spin up the services using the configuration files from both backend and frontend.

```bash
docker-compose -f backend/docker-compose.yml -f frontend/docker-compose.yml up -d
```

## Contributing

Contributions are welcome! Please open issues or submit pull requests.

## License

This project is licensed under the [MIT License](LICENSE).