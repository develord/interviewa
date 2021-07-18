FROM node:12.18.3-alpine
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV
ARG PORT=3000
ENV PORT $PORT
EXPOSE $PORT
RUN npm i npm@latest -g
RUN mkdir /opt/node_app && chown node:node /opt/node_app
WORKDIR /opt/node_app
USER node
COPY --chown=node:node package.json .
RUN npm install --no-optional && npm cache clean --force
ENV PATH /opt/node_app/node_modules/.bin:$PATH
WORKDIR /opt/node_app/app
COPY --chown=node:node . .
CMD [ "node", "index.js" ]