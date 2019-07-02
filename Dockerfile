FROM node:lts-alpine

WORKDIR /crocksandsocks

RUN apk add --no-cache build-base g++ gcc cairo-dev jpeg-dev pango-dev giflib-dev python ffmpeg

COPY . .

RUN yarn && yarn build

CMD node dist/
