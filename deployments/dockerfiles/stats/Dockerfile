FROM node:16-alpine AS build

WORKDIR /app

ARG CACHE_AUTH
ARG TELEGRAM_BOT_TOKEN
ARG FETCH_RSS_COM_TOKEN

ARG NODE_ENV
ENV NODE_ENV ${NODE_ENV:-production}

COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:16-alpine
WORKDIR /app
COPY . .
COPY --from=build /app/dist ./dist
EXPOSE 8080
CMD [ "node", "./dist/backend"]
