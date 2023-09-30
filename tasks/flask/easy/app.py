# Flask - Easy

from flask import Flask

app = Flask(__name__)

# TODO: Implement rest of the code here

@app.route("/")
def hello_world():
    return "<h1> Hello Flask! <h1>"
