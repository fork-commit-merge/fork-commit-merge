# Import the Flask class from the flask module
from flask import Flask

# Create an instance of the Flask class
app = Flask(__name__)

# Define a route for the root url ("/")
@app.route("/")
def hello():
  return "Hello, Falsk!"

# Run the Flask app if this script is executed directly
if __name__ == "__main__":
  app.run()
