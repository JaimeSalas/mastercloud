FROM node:latest

WORKDIR /opt/app

COPY . .

RUN npm i --only=production

EXPOSE 8080

ENTRYPOINT [ "npm" ]
CMD [ "start" ]

