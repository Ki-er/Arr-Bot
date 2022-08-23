FROM node:16.16.0

RUN mkdir -p /usr/arrbot
WORKDIR /usr/arrbot

COPY package.json /usr/arrbot
RUN npm install

COPY . /usr/arrbot

CMD ["node", "index.js"]
