# Balanzo

![CI](https://github.com/rolandcsosz/balanzo/actions/workflows/e2e.yml/badge.svg)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![Tauri](https://img.shields.io/badge/Tauri-v2-orange)
![React](https://img.shields.io/badge/React-v18-blue)

<p align="center">
  <img src="./frontend/public/tumbnail.png" alt="Balanzo Dashboard" width="100%">
</p>

## Overview

**Balanzo** is a modern, privacy-focused personal finance manager designed to give you complete control over your financial data. Built as a cross-platform application using **Tauri**, it combines the performance of a native desktop app with the flexibility of a modern web stack.

Unlike cloud-only solutions, Balanzo prioritizes your data ownership while providing a seamless experience across devices through its Progressive Web App (PWA) capabilities. It features intuitive expense tracking, detailed visual analytics, and a robust self-hostable backend.

## ✨ Key Features

-   **Cross-Platform Native Experience**: Built with [Tauri](https://tauri.app/), delivering a lightweight, fast, and secure desktop application for Windows, macOS, and Linux.
-   **Progressive Web App (PWA)**: Access your finances from any browser with full offline support and installability.
-   **Rich Data Visualization**: Interactive charts and graphs powered by [Plotly.js](https://plotly.com/javascript/) to visualize spending habits and income streams.
-   **Secure & Private**: Self-hostable backend ensures your financial data stays with you.
-   **Robust API**: Fully typed REST API with Swagger documentation for easy integration and extension.

## 🛠️ Tech Stack

This project leverages a modern, type-safe architecture to ensure scalability and maintainability.

### Frontend
-   **Framework**: [React](https://react.dev/) (via Vite)
-   **Desktop Engine**: [Tauri](https://tauri.app/) (Rust-based lightweight wrapper)
-   **State Management & Querying**: [TanStack Query](https://tanstack.com/query/latest)
-   **Styling**: SCSS / CSS Modules
-   **Visualization**: Plotly.js / React-Plotly

### Backend
-   **Runtime**: Node.js
-   **Framework**: [Express.js](https://expressjs.com/)
-   **Database**: PostgreSQL
-   **ORM**: [Prisma](https://www.prisma.io/)
-   **API Design**: [TSOA](https://tsoa-community.github.io/docs/intro.html) (TypeScript OpenAPI) for auto-generating Swagger specs and routes.
-   **Authentication**: JWT & BCrypt

### DevOps & Infrastructure
-   **Containerization**: Docker & Docker Compose
-   **CI/CD**: GitHub Actions (E2E testing)
-   **Testing**: Playwright (E2E)

## 🚀 Getting Started

The easiest way to run Balanzo locally is using Docker Compose. This will start both the backend API and the frontend client.

### Prerequisites
-   [Docker](https://www.docker.com/) installed and running.

### Quick Start

1.  **Clone the repository**
    ```bash
    git clone https://github.com/rolandcsosz/balanzo.git
    cd balanzo
    ```

2.  **Start the stack**
    ```bash
    docker-compose -f backend/docker-compose.yml -f frontend/docker-compose.yml up -d
    ```

3.  **Access the App**
    -   Frontend: [http://localhost:5173](http://localhost:5173) (or the port specified in docker-compose)
    -   API Documentation: [http://localhost:3000/docs](http://localhost:3000/docs)

### Manual Development Setup

If you wish to contribute or run services individually, please refer to the specific documentation:

-   **[Backend Setup Guide](./backend/README.md)**
-   **[Frontend Setup Guide](./frontend/README.md)**

## 💡 Engineering Highlights

### Why TSOA?
I chose TSOA for the backend to ensure a **Source of Truth** architecture. By defining controllers and models in TypeScript, TSOA automatically generates:
1.  **Express Routes** (reducing boilerplate and runtime errors).
2.  **OpenAPI (Swagger) Spec** (ensuring documentation never drifts from code).
3.  **Frontend SDKs** (can be generated from the spec for full end-to-end type safety).

### Why Tauri?
Tauri allows Balanzo to be an incredibly small (<10MB) native application compared to Electron alternatives, while interacting securely with the underlying OS. This aligns with the goal of keeping the app lightweight and performant on user machines.

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) and [Code of Conduct](CODE_OF_CONDUCT.md) for more details.

## 📄 License

This project is licensed under the [MIT License](LICENSE).