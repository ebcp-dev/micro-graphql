FROM node:10

WORKDIR /usr/app/service_1

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8082

CMD [ "npm", "start" ]