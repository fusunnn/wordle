import axios from "axios";

export async function fetchEncrypted() {
  return axios.get("https://ivanadrd.pythonanywhere.com/wordle").then((res) => {
    return res.data.word;
  });
}
