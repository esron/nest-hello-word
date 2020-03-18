FROM node:12.14.0-alpine3.11

RUN apk add --no-cache bash

RUN touch /root/.bashrc | echo "PS1='\w\$ '" >> /root/.bashrc

WORKDIR /home/node/app

COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]

RUN npm i -g @nestjs/cli@6.14.2 && npm install --production --silent

COPY . .

EXPOSE 8080

CMD nest build && npm run start:prod
