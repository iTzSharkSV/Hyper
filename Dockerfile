FROM node:latest

COPY . .

RUN npm install
RUN npm run build

CMD node ./Bin/Hyper