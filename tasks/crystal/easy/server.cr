# Crystal - Easy

require "http/server"

# TODO: Implement the HTTP server
# Create a new server instance
server = HTTP::Server.new do |context|
  # Respond to every request with "Hello, world!"
  context.response.content_type = "text/plain"
  context.response.print "Hello, world!"
end

# Define the listening address and port
address = server.bind_tcp "127.0.0.1", 3000

# Display where the server is running
puts "Listening on http://#{address}"

# Start the server
server.listen