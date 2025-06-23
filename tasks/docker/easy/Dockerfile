# Docker - Easy

# Lock the node image version
FROM node:20@sha256:accd529f51eca09980605f278570579a9b9d32f952aa35a0758bc724fcc134ae

# Working directory inside the container
WORKDIR /usr/src/app

# Copy the required file inside container to run the application
COPY index.js /usr/src/app/

# Build and run the application inside container
CMD ["node","index.js"]