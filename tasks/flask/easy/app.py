from flask import Flask

app = Flask(__name)

# TODO: Implement the task requested in the issue description

@app.route("/")
@app.route("/home")
def home():
    return "Hello World"

if __name__ == "__main__":
    app.run(debug=True)
