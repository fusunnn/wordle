from flask import Flask, jsonify, request
from flask_cors import CORS
from helpers import *
from encryption import *

app = Flask(__name__)
cors = CORS(app)


@app.route("/wordle", methods=['GET', 'POST'])
def wordle():
    word = get_word()
    key = get_key()
    response = combine(encrypt(word, key), key)
    return jsonify({'data': response})


if __name__ == '__main__':
    app.run(debug=True)
