

def get_word():
    with open('./word.txt', 'r') as f:
        return f.read()


def compare_word(word, compare_word):
    compare_arr = []
    for i in range(len(word)):
        if compare_word[i] == word[i]:
            compare_arr.append(2)
        elif compare_word[i] in word and compare_arr.count(compare_word[i]) < word.count(compare_word[i]):
            compare_arr.append(1)
        else:
            compare_arr.append(0)

    return compare_arr
