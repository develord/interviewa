FROM node:12.18.3-alpine 
# Create app directory and use it as the working directory 
RUN mkdir -p /srv/app/client 
WORKDIR /srv/app/client 
COPY package.json /srv/app/client
RUN yarn
RUN yarn global add http-server
COPY . /srv/app/client 
RUN yarn build
#CMD [ "yarn", "serve" ]
CMD [ "http-server", "dist" ]
