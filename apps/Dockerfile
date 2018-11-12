FROM node:8.12-stretch

WORKDIR /usr/src/

COPY . .

RUN npm install --silent
RUN npm cache clean

ADD . /usr/src/

EXPOSE 3000 3010 3306 4200 8080 80
