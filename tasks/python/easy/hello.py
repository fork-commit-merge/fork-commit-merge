# Python - Easy
from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello():
    return "Hello World!"

if __name__ == '__main__':
    app.run(debug=True)
# TODO: Write a function that prints "Hello, Python!" to the console
