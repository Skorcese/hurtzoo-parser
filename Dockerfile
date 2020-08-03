FROM buildkite/puppeteer:latest

WORKDIR /app

COPY ./packages ./packages
COPY package.json ./

RUN yarn
