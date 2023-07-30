FROM node:18.17-alpine3.18 AS runner
  LABEL maintainer="Airscript <francesco@airscript.it>"
  WORKDIR /tmp
  COPY entrypoint.sh .
  RUN npm install -g analscript
  ENTRYPOINT [ "./entrypoint.sh" ]
  CMD [ "/bin/sh" ]