# Docker - Medium

# TODO: Create a multi-stage Dockerfile for a web application
# Requirements:
# 1. Build stage: Use Node.js to build the application
FROM node:25 AS builder
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm run build
ENV NODE_ENV=production
# 2. Production stage: Use nginx to serve the built application
FROM nginx:alpine
COPY --from=builder /usr/src/app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
# 3. Optimize the image size
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
# 4. Set proper environment variables
ENV NODE_ENV=production