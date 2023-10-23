# Use an official NGINX image as a parent image
FROM nginx:latest

# Copy your custom nginx.conf file into the container
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy your HTML files (index.html) to the NGINX web root directory
COPY index.html /usr/share/nginx/html/index.html

# Expose the port that NGINX will listen on (8080)
EXPOSE 8080

# Start NGINX when the container runs
CMD ["nginx", "-g", "daemon off;"]
