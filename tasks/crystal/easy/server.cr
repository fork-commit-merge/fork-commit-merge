# Crystal - Easy

require "http/server"

# Implement a simple HTTP server
server = HTTP::Server.new do |context|
  context.response.content_type = "text/plain"
  context.response.print "Hello, Crystal!"
end

address = server.bind_tcp 8080
puts "Listening on http://#{address}"
server.listen
