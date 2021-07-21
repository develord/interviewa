FROM node:16.5.0-alpine
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV
ARG PORT=3000
ENV PORT $PORT
EXPOSE $PORT
RUN mkdir /opt/node_app
RUN npm i npm@latest -g
WORKDIR /opt/node_app
COPY package.json .
RUN npm install
COPY . .
CMD [ "node", "index.js" ]