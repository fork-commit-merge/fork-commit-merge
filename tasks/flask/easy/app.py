from flask import Flask

app = Flask(__name__)

# TODO: Implement the task requested in the issue description
# For example, add a route or some functionality here

# Example route that responds with "Hello, World!"
@app.route('/')
def hello_world():
    return 'Hello, World!'

if __name__ == "__main__":
    app.run(debug=True)
