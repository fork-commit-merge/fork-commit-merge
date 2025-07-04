from flask import Flask

app = Flask(__name__)

# TODO: Implement the task requested in the issue description
@app.route('/')
def hello_flask():
    return "Hello, Flask!"

if __name__ == "__main__":
    app.run(debug=True)
