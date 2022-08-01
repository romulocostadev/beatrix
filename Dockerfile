FROM node:16.13.0

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json
RUN yarn --silent

CMD ["yarn", "start"]