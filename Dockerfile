FROM node:carbon-alpine

# Install yarn and other dependencies via apk
RUN apk add --update git python make g++ && \
  rm -rf /tmp/* /var/cache/apk/*

RUN npm install -g truffle@4.1.13

WORKDIR /usr/app

# Install node dependencies - done in a separate step so Docker can cache it.
COPY package-lock.json .
COPY package.json .

RUN npm install --from-lockfile

COPY . .
