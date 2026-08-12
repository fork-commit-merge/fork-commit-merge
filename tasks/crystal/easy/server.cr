# Crystal - Easy

require "http/server"

server = HTTP::Server.new do |context|
  context.response.content_type = "text/plain"
  context.response.print "Hello, world!"
end

address = server.bind_tcp("127.0.0.1", 3000)

puts "Listening on http://#{address}"

server.listen