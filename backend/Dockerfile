# Stage 1: builder
FROM node:20-alpine AS builder
WORKDIR /app

COPY backend/package*.json ./
RUN npm install
COPY backend/ ./

RUN ENV_FILE=.env.docker npm run generate:client
RUN npm run generate:routes
RUN npm run generate:swagger
RUN npm run build

RUN npx esbuild dist/index.js --bundle --platform=node --outfile=dist/bundle.js

FROM node:20-alpine
WORKDIR /app

COPY --from=builder /app/dist/bundle.js ./bundle.js
COPY --from=builder /app/prisma ./prisma
COPY backend/.env.docker .env.docker

EXPOSE 8080
CMD ["sh", "-c", "ENV_FILE=.env.docker node bundle.js"]
