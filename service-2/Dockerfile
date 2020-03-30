FROM node:10

WORKDIR /usr/app/service_2

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8083

CMD [ "npm", "start" ]