import axios from 'axios';

const api = axios.create({
  baseURL: "https://grafos-av3.herokuapp.com/",
});

export default api;