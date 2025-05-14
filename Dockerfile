FROM node as frontend

WORKDIR /frontend

COPY . .

RUN npm i && npm run build

FROM nginx:1.25.2-alpine

WORKDIR /usr/share/nginx/

RUN rm -rf html && mkdir html

WORKDIR /

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=frontend ./frontend/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
