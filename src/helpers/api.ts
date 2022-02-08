import axios from "axios";

export async function fetchEncrypted() {
  return axios.get("http://127.0.0.1:5000/wordle").then((res) => {
    return res.data.data;
  });
}
