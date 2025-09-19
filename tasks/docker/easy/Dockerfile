# Docker - Easy
# TODO: Create a Dockerfile requested in the task description

FROM node:20-alpine

WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node" , "index.js"]
