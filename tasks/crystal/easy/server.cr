# Crystal - Easy
# Implement the HTTP server

require "http/server"

port = 8080

server = HTTP::Server.new do |context|
  context.response.content_type = "text/plain"
  context.response.print "Hello from Crystal!"
end

puts "Server listening on port #{port}"
server.listen(port)
