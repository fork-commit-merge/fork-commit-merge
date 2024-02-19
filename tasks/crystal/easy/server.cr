require "http/server"

server = HTTP::Server.new do |context|
  context.response.content_type = "text/plain"
  context.response.print "Hello, World!"
end

address = server.bind_tcp "0.0.0.0", 8080
puts "Listening on http://#{address}"
server.listen
