import requests


def fetch():
    url = "https://wordsapiv1.p.rapidapi.com/words/"

    querystring = {"random": "true", "letters": "5",
                   "limit": "1"}

    headers = {
        'x-rapidapi-host': "wordsapiv1.p.rapidapi.com",
        'x-rapidapi-key': "f26c1160fcmsh20cda4a1422347bp1bd9abjsne7f900f5b855"
    }

    response = requests.request(
        "GET", url, headers=headers, params=querystring)

    word = response.json()

    return word


def fetch_word():

    current_word = ''
    current_freq = 0

    while current_freq < 4.5:
        word = fetch()
        try:
            current_word = word['word']
            current_freq = word['frequency']
        except KeyError:
            pass

    return current_word


def write(word):
    with open('./word.txt', 'w') as f:
        f.write(word)


def run():

    word = fetch_word()
    write(word)


run()
