# Docker - Medium

# TODO: Create a multi-stage Dockerfile for a web application
# Requirements:
# 1. Build stage: Use Node.js to build the application
# 2. Production stage: Use nginx to serve the built application
# 3. Optimize the image size
# 4. Set proper environment variables


# Build React app
FROM node:20-alpine as build
WORKDIR /usr/src/app
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
RUN npm run build

# Use Nginx to serve files
FROM nginx:alpine
ENV NODE_ENV=production
# Copy build output to Nginx html folder
COPY --from=build /usr/src/app/build /usr/share/nginx/html
# Copy custom Nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]