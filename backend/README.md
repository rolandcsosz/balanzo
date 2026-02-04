# Balanzo Backend

Node.js backend for Balanzo, built with Express, TypeScript, Prisma, and TSOA. The backend auto-generates API routes and Swagger documentation from type-safe interfaces.

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express
- **Language**: TypeScript
- **ORM**: Prisma
- **API Docs**: TSOA (Swagger/OpenAPI)
- **Validation**: Joi / TSOA

## Dev setup

1.  **Environment Variables**:
    Copy `.env.example` to `.env` and configure your variables.
    ```bash
    cp .env.example .env
    ```
    - `INIT_DATA`: Set to `true` to seed the database with initial data.
    - `JWT_SECRET`: Secret key for JWT signing.
    - Note: Docker setup uses `.env.docker` automatically.

2.  **Database**:
    Start the database using Docker (from the root or backend directory) or use your own instance.
    ```bash
    docker-compose up -d
    ```

3.  **Migrations**:
    Deploy the database schema.
    ```bash
    npm run db:deploy
    ```

4.  **Start the server**:
    ```bash
    npm run dev
    ```

## Production setup with Docker compose

1.  **Environment Variables If Needed**:
    The docker file comes with default configs, but i fyou want to override those values copy `.env.example` to `.env` and configure your variables (database URL, etc.).
    ```bash
    cp .env.example .env
    ```

2. **Run docker compose**:
    ```bash
    docker-compose up -d
    ```

## Development Workflow

1.  **Modify Database**:
    If you change `prisma/schema.prisma`:
    ```bash
    # Update schema and client
    npm run generate:client
    # Create a migration (optional, for dev)
    npm run generate:migration
    ```

2.  **Update Logic**:
    Modify controllers and services.

3.  **Update API Routes & Docs**:
    If you change controllers or models, regenerate TSOA routes and Swagger spec.
    ```bash
    npm run generate:routes
    npm run generate:swagger
    ```

## Scripts

- **`npm run dev`**: Start the development server (using `tsx`).
- **`npm run build`**: Build the project for production.
- **`npm run start`**: Run the built project.
- **`npm run lint`**: Lint the code.
- **`npm run format`**: Format the code.
- **`npm run db:reset`**: Reset the database (Caution: deletes data).

## API Documentation

Once the server is running (usually at `http://localhost:3000`), you can access the Swagger UI documentation at `/docs` and OpenAPI spec at `/openapi.json`.
