from flask import Flask

app = Flask(__name)

# TODO: Implement the task requested in the issue description

@app.route('/')
def hello():
        return 'Hello, Flask!'

if __name__ == "__main__":
    app.run(debug=True)
