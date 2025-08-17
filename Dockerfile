FROM node:22.0 AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV CHOKIDAR_USEPOLLING=true

RUN npm run build

# stage 2 - Serve

FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g","daemon off;"]

