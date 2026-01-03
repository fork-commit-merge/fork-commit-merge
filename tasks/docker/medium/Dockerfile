# -------- Build Stage --------
FROM node:18-alpine AS builder

WORKDIR /app

# Simulate build output (no real app in this repo)
RUN mkdir dist && echo "<h1>Docker Medium Task</h1>" > dist/index.html


# -------- Production Stage --------
FROM nginx:alpine

# Remove default nginx configuration
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built files from build stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
