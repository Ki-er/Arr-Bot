FROM node:20.1.0
RUN mkdir -p /usr/arrbot/src
WORKDIR /usr/arrbot/src
COPY package.json /usr/arrbot/src
RUN npm install
COPY . /usr/arrbot/src
CMD ["node", "src/index.js"]
