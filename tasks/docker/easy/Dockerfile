# Docker - Easy

# Use official Node.js runtime as base image
FROM node:18-alpine

# Set working directory in container
WORKDIR /app

# Copy package files (if they exist)
COPY package*.json ./

# Install dependencies (if package.json exists)
RUN npm install --only=production

# Copy application code
COPY . .

# Expose port (optional, for web applications)
EXPOSE 3000

# Run the application
CMD ["node", "index.js"]
