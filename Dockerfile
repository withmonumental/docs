FROM nginx:1.17.5-alpine as production-stage

WORKDIR /

ARG NODE_ENV
COPY ./dist/${NODE_ENV} /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d
COPY startup.sh /usr/local/bin/
#EXPOSE 7081
ENTRYPOINT ["/bin/sh", "/usr/local/bin/startup.sh"]
