from flask import Flask, jsonify, request
from flask_cors import CORS
from helpers import *
import requests


app = Flask(__name__)
cors = CORS(app)


@app.route("/wordle", methods=['GET', 'POST'])
def index():
    word = get_word()
    word_check = request.args.get('word')

    return jsonify({'data': compare_word(word, word_check)})


if __name__ == '__main__':
    app.run(debug=True)
