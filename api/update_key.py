from random import randint
import string


def write(word, file_url):
    with open(file_url, 'w') as f:
        f.write(word)


def generate_key():
    possible_chars = string.ascii_letters + string.digits + "!=.,;"
    key = ''
    for _ in range(16):
        key += possible_chars[randint(0, len(possible_chars)-1)]
    return key


def run():
    key = generate_key()
    write(key, './key.key')


run()
