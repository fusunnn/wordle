const CryptoJS = require("crypto-js");

export function decrypt(encrypted: string, key: string) {
  console.log(key.length);
  key = CryptoJS.enc.Utf8.parse(key);
  var decrypted = CryptoJS.AES.decrypt(encrypted, key, {
    mode: CryptoJS.mode.ECB,
  });
  return decrypted.toString(CryptoJS.enc.Utf8);
}
