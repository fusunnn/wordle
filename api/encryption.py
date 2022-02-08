import base64 
from Crypto.Cipher import AES
from Crypto.Util.Padding import pad,unpad




def encrypt(data, key):
        raw = pad(data.encode(),16)
        cipher = AES.new(key.encode('utf-8'), AES.MODE_ECB)
        return base64.b64encode(cipher.encrypt(raw)).decode('utf-8', 'ignore')

def decrypt(enc, key):
        enc = base64.b64decode(enc)
        cipher = AES.new(key.encode('utf-8'), AES.MODE_ECB)
        return unpad(cipher.decrypt(enc),16)