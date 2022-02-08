from random import randint


def get_word():
    with open('./word.txt', 'r') as f:
        word = f.read()
        return word


def get_key():
    with open('./key.key', 'r') as k:
        key = k.read()
        return key


def combine(word, key):
    combined = word + key
    inserted = '-/_'

    for _ in range(randint(0, 20)):
        index = randint(0, len(combined))
        combined = combined[:index] + \
            inserted[randint(0, 2)] + combined[index:]

    return combined
