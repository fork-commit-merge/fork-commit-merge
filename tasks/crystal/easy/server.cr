# Crystal - Easy

require "http/server"

# TODO: Implement the HTTP server
# create a simple HTTP server that handles requests
server = HTTP::Server.new do |context|
context.response.content_tupe = "text/plain"

#Handle different routes
case context.request.path
when "/"
context.request.print "Hello, World"
when "/about"
context.response.print"About page"
else
content.response.status = HTTP::Statu::NOT_FOUND
content.response.print"Page not found"
end
end
#Sart yhe server on 8080
address = server.bind_tcp(8080)
puts "Server running at http://#{address}"
server.listen 