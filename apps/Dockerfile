FROM node:10.15-stretch

WORKDIR /usr/src/

COPY . .

RUN npm install --silent
RUN npm cache clean

ADD . /usr/src/

EXPOSE 3000 3001 3002 3003 3306 4200 80
