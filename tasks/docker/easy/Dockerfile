# Docker - Easy

# TODO: Create a Dockerfile requested in the task description
#use an official  python runtime as a base image
FROM python:3.9-slim

#set the working directory in the container
WORKDIR / app
#copy the current directory contents into the container
COPY . .
#install any neede dependencies
RUN pip install --no-cache-dir -r requirements.txt
#make port available to the world outside this container
EXPOSE 8000
#define environment variable
ENV NAME world
#run the application 
CMD ["python", "app.py"]
