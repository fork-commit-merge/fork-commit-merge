from flask import Flask

# Initialize Flask app
app = Flask(__name__)

# Define route for root URL
@app.route('/')
def hello():
    return "Hello, Flask!"

# Run the app
if __name__ == '__main__':
    app.run(debug=True)
