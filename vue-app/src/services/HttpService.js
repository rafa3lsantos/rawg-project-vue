import axios from 'axios';

const HttpService = axios.create({
  baseURL: "https://api.rawg.io/api/",
  headers: {
    "Content-Type": "application/json",
  },
  params: {
    key: "34791ec65c1d43459e057b5221c62e3e"
  }
});

export const getGames = () => {
  return HttpService.get("games");
};

export default HttpService;
