FROM node:lts-alpine as builder

WORKDIR /usr/share/app

RUN apk add --no-cache build-base g++ gcc cairo-dev jpeg-dev pango-dev giflib-dev python ffmpeg

COPY package*.json ./

RUN npm ci

FROM node:lts-alpine

WORKDIR /usr/share/app

COPY --from=builder /usr/share/app/node_modules ./node_modules

RUN apk add --no-cache ffmpeg cairo jpeg pango giflib font-noto

COPY ./assets ./assets

VOLUME ./data

COPY . .

ARG COMMIT_HASH=UNKNOWN
ENV COMMIT_HASH $COMMIT_HASH

ARG BUILD_DATE=UNKNOWN
ENV BUILD_DATE $BUILD_DATE

RUN ["npm", "run", "build"]

CMD ["node", "dist/"]
