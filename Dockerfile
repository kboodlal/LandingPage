# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR .

# add `/app/node_modules/.bin` to $PATH
ENV PATH ./node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install 
RUN npm install react-scripts@3.4.1
RUN npm install serve
RUN mkdir /public
RUN ls .
RUN ls /public
RUN mkdir /build
#RUN npm run build

# add app
RUN pwd
COPY . ./

EXPOSE 3000/tcp

#RUN chown -R $USER:$(id -gn $USER) /home/node/.config
#USER root
#RUN mkdir /.config
#RUN echo $USER
#RUN  chown -R node:$(id -gn node) /.config
#USER node
#RUN ls -la /


# start app
#CMD ["npm", "start"]
CMD ["./node_modules/.bin/serve", "-p", "3000", "-s", "build"]
