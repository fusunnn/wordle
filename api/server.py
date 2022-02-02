from flask import Flask, jsonify, request
from flask_cors import CORS
from helpers import *
import requests


app = Flask(__name__)
cors = CORS(app)


@app.route("/wordle", methods=['GET', 'POST'])
def index():
    word = get_word()

    return jsonify({'data': encrypt(word)})


if __name__ == '__main__':
    app.run(debug=True)
