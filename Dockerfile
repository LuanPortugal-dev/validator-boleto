FROM node:17-alpine

WORKDIR /src

COPY package*.json ./

RUN yarn

COPY . .

EXPOSE 8080

CMD yarn build && yarn start