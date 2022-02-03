import axios from "axios";

export const decrypt = async (data) => {
  var enc = new TextEncoder(); // always utf-8
  const convertedKey = enc.encode("This is a string converted to a Uint8Array");
  const key = window.crypto.subtle.importKey(
    "raw",
    convertedKey,
    { name: "AES-ECB" },
    false,
    ["decrypt"]
  );
  return window.crypto.subtle.decrypt(
    {
      name: "AES-ECB",
    },
    key,
    data
  );
};

export async function fetchEncrypted() {
  return axios.get("https://test-encrypt.fusunnn.repl.co").then((res) => {
    return res.data.word;
  });
}
