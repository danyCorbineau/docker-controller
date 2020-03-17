FROM node:latest AS build
WORKDIR /usr/app
COPY package.json .
RUN npm install --quiet
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /usr/app/dist/Client /usr/share/nginx/html
