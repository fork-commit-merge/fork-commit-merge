# Use your preferred Node.js version (for example, 14) as the base image
FROM node:14

# Set the working directory inside the container to /usr/src/app
WORKDIR /usr/src/app

# Copy the local project files into the container
COPY . .

# Install dependencies (if any)
# RUN npm install

# Set the default command to run your application using node index.js
CMD ["node", "index.js"]
