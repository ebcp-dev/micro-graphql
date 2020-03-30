FROM node:10

WORKDIR /usr/app/main

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8081

CMD [ "npm", "start" ]