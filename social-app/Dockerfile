FROM node:13

RUN mkdir /app
WORKDIR /app

COPY package*.json ./
RUN npm install

CMD ["npm", "run", "dev"]