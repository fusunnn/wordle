import axios from "axios";

export async function fetchEncrypted() {
  return axios.get("https://test-encrypt.fusunnn.repl.co").then((res) => {
    return res.data.word;
  });
}
