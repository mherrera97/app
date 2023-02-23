FROM node:18-alpine as build

WORKDIR /app
# Copy app package.json
COPY package*.json ./
# Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
RUN npm ci
# Copy app files
COPY . .

# Build the app
RUN npm run build
# enviroment variables

## expose App

### Stage 2

FROM nginx:alpine
ADD ./config/default.conf /etc/nginx/conf.d/default.conf
#copy folder build
COPY --from=build /app/dist /usr/share/nginx/html
#expose port
EXPOSE 80

CMD [ "nginx","-g","daemon off;" ]