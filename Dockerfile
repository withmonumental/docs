FROM nginx:1.17.5-alpine as production-stage

WORKDIR /

ARG NODE_ENV
COPY package.json package.json
COPY ./src/.vuepress/dist/ /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d
COPY startup.sh /usr/local/bin/

ENTRYPOINT ["/bin/sh", "/usr/local/bin/startup.sh"]
