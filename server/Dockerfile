FROM node:12.18.3-alpine
# Create app directory 
RUN mkdir -p /srv/app/server 
WORKDIR /srv/app/server 
COPY package.json /srv/app/server 
# COPY package—lock.json /srv/app/server 
RUN yarn install 
COPY . /srv/app/server 
CMD ["yarn", "start"]
