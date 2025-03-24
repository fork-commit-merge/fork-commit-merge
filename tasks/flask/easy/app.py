from flask import Flask

app = Flask(__name)

def home():
    return "Hello, Flask!"  

if __name__ == "__main__":
    app.run(debug=True)
