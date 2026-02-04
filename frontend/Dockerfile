FROM node:20-alpine AS build

WORKDIR /app/frontend
COPY frontend/package*.json ./

RUN npm install

COPY frontend/ .
COPY libs ../libs

RUN npm run build

FROM nginx:1.25-alpine

COPY --from=build /app/frontend/dist /usr/share/nginx/html
COPY frontend/entrypoint.sh /app/frontend/entrypoint.sh

ENTRYPOINT ["/app/frontend/entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
