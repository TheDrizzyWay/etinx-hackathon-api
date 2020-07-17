FROM node:alpine as builder
WORKDIR "."
COPY ./package.json .
RUN npm install yarn
RUN yarn install
COPY . .
RUN yarn run build
FROM nginx
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder ./build /usr/share/nginx/html