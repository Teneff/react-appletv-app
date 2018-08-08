import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:9001/data',
  timeout: 5000,
  responseType: 'json',
});

export default API;
