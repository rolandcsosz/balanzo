FROM node:20-slim

RUN apt-get update -y && apt-get install -y openssl curl

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run generate:client
RUN npm run generate:routes
RUN npm run generate:swagger
RUN npm run build


EXPOSE 8080

CMD ["sh", "-c", "npm run db:deploy && npm run start"]