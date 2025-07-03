# Docker - Medium

# TODO: Create a multi-stage Dockerfile for a web application
# Requirements:
# 1. Build stage: Use Node.js to build the application
# 2. Production stage: Use nginx to serve the built application
# 3. Optimize the image size
# 4. Set proper environment variables

# Build stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"] 