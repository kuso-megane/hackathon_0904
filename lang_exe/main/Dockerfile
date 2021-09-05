FROM docker as docker

FROM php:7.4-apache

COPY --from=docker /usr/local/bin/docker/ /usr/local/bin/docker/

ENV APACHE_RUN_USER=www-data
ENV APACHE_RUN_GROUP=www-data
ENV APACHE_PID_FILE=/var/run/apache2.pid
ENV APACHE_RUN_DIR=/var/run/apache2
ENV APACHE_LOG_DIR=/var/log/apache2
ENV APACHE_LOCK_DIR=/var/lock/apache2

ENV PATH $PATH:/usr/local/bin/docker


# for routing
RUN a2enmod rewrite



CMD ["apachectl", "-D", "FOREGROUND"]

WORKDIR /var/www/

EXPOSE 80
