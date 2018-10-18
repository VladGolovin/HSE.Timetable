FROM node:8.9-alpine
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install
RUN bower install
COPY . .
EXPOSE 80
RUN ember serve