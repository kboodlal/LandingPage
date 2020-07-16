# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR .

# add `/app/node_modules/.bin` to $PATH
ENV PATH ./node_modules/.bin:$PATH

# install app dependencies
RUN mkdir /public
COPY public/* /public/

RUN mkdir /src
COPY src/ /src/

COPY package.json ./
COPY package-lock.json ./

RUN npm install 
RUN npm install react-scripts@3.4.1
RUN npm install serve

RUN mkdir /build
RUN npm run build

# add app
RUN pwd
COPY . ./

EXPOSE 3000/tcp

# start app
CMD ["./node_modules/.bin/serve", "-p", "3000", "-s", "build"]
