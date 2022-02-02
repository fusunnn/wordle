import axios, { AxiosResponse, AxiosRequestConfig } from "axios";

export async function checkAnswer(word: string) {
  const options: AxiosRequestConfig = {
    method: "GET",
    url: "http://127.0.0.1:5000/wordle",
    params: { word: word },
  };

  const data = await axios.request(options).then((response: AxiosResponse) => {
    return response.data.data;
  });
  return data;
}
