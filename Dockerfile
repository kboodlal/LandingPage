# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /home/node

USER node

# add `/app/node_modules/.bin` to $PATH
ENV PATH ./node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 --silent

# add app
COPY . ./

EXPOSE 3000/tcp

RUN whoami
RUN echo $HOME
RUN rm -rf /home/node/.config/
#RUN chown -R $USER:$(id -gn $USER) /home/node/.config
#RUN chmod -R 755 /home/node/.config


# start app
CMD ["npm", "start"]
