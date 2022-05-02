FROM node:12-alpine
WORKDIR /usr/src/app
EXPOSE 8002

COPY package*.json ./
RUN npm install

ADD ui/build/ /usr/src/app/ui/build/
ADD build/ /usr/src/app/build/

WORKDIR /usr/src/app/build
CMD [ "node", "bundle.js" ]