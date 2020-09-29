FROM node:12-alpine as builder

WORKDIR /app

COPY package*.json ./
RUN npm i

FROM node:12-alpine

WORKDIR /app

RUN apk update && apk --no-cache add gcompat

COPY --from=builder /app/node_modules /app/node_modules
COPY package*.json ./
COPY src src
COPY *.json ./

RUN npm run build

EXPOSE 8080

CMD npm run start:prod
