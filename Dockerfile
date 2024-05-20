FROM node:18.20.2-bullseye


WORKDIR /app

COPY . .

RUN apt-get update && apt-get -y --no-install-recommends install git wget zlib1g unzip vim tini \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

RUN npm install 

RUN npm install sharp 

RUN npm run build

EXPOSE 80

ENTRYPOINT ["/usr/bin/tini", "--"]

CMD ["npm", "start", "--", "-p", "80"]
