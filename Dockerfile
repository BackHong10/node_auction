FROM node:14

COPY ./package.json /myfolder/
COPY ./package-lock.json /myfolder/
WORKDIR /myfolder/
RUN npm i

COPY . /myfolder/




CMD npm start