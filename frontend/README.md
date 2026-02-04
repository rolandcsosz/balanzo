# Balanzo Frontend

Progressive Web App and Desktop frontend for Balanzo, built with Vite, Preact, TypeScript, and Tauri.

## Tech Stack

- **Framework**: Preact
- **Build Tool**: Vite
- **Language**: TypeScript
- **Desktop Wrapper**: Tauri
- **State Management**: TanStack Query
- **Styling**: SCSS

## Dev setup

1.  **Environment Variables**:
    Copy `.env.example` to `.env`. This file contains the development backend URL.
    ```bash
    cp .env.example .env
    ```

2.  **Install Dependencies**:
    Run from the root or frontend directory:
    ```bash
    npm install
    ```

3.  **Run the development server**:
    ```bash
    npm run dev
    ```

## Production setup with Docker compose

1.  **Environment Variables**:
    The development `.env` is skipped in production. Docker Compose environment variables (defined in `docker-compose.yml`) are the source of truth for deployment.

2.  **Run docker compose**:
    ```bash
    docker-compose up -d
    ```

## Desktop Application (Tauri)

Balanzo can be built as a native desktop application using Tauri.

### Prerequisites
Ensure you have the [Tauri prerequisites](https://tauri.app/v1/guides/getting-started/prerequisites) installed for your operating system (Rust, C++ build tools, etc.).

### Commands

- **Develop Desktop App**:
    Run this to start the Tauri development window:
    ```bash
    npm run tauri dev
    ```

- **Build Desktop App**:
    Run this to create a distributable installer/bundle for your OS:
    ```bash
    npm run tauri build
    ```
