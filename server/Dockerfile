FROM node:16-alpine

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install

RUN npm install --location=global nodemon

COPY . ./

EXPOSE 3000

CMD ["npm", "run", "dev"]