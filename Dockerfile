FROM node:lts-alpine

WORKDIR /crocksandsocks

RUN apk add --no-cache build-base g++ gcc cairo-dev jpeg-dev pango-dev giflib-dev python ffmpeg

COPY package*.json ./

RUN npm ci

COPY . .

RUN ["npm", "run", "build"]

CMD ["node", "dist/"]
