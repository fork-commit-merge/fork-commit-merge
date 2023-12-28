# Docker - Easy

# TODO: Create a Dockerfile requested in the task description

FROM node:21-alpine

ENV NODE_VERSION 21.0.0

WORKDIR /usr/src/app
COPY . .

USER node
RUN node index.js

EXPOSE 8000

