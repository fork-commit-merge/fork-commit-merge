# Docker - Medium

# TODO: Create a multi-stage Dockerfile for a web application
# Requirements:
# 1. Build stage: Use Node.js to build the application
# 2. Production stage: Use nginx to serve the built application
# 3. Optimize the image size
# 4. Set proper environment variables


# ===== Build Stage =====
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=dev

COPY . .
RUN npm run build

# ===== Production Stage =====
FROM nginx:stable-alpine AS production

ENV NODE_ENV=production

COPY nginx.conf /etc/nginx/nginx.conf
RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
