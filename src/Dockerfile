FROM node

WORKDIR /usr/src/


COPY ["package.json","package-lock.json", "/usr/src/"]


COPY ["yarn.lock", "/usr/src/"]


RUN yarn install


COPY [".", "/usr/src/"]

EXPOSE 3000

CMD ["yarn","run","dev","--host"]