# Docker - Easy

# TODO: Create a Dockerfile requested in the task description

# Use an official Node.js image as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Expose a port if your application listens on a specific port
# EXPOSE 3000

# Specify the command to run your application
CMD ["node", "app.js"]
