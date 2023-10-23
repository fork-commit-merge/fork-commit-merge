### here is how u can build
docker build -t my-nginx .
### here is how u run it
docker run -p 8080:8080 my-nginx
### here is how to test it
curl http://localhost:8080
