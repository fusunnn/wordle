def get_word():
      with open('./word.txt', 'r') as f:
        word = f.read()
        return word

def get_key():
  with open ('./key.key', 'r') as k:
    key = k.read()
    return key