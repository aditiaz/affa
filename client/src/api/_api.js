import axios from 'axios';

export const API = axios.create({
  baseURL: 'http://localhost:5000/api/v1',
  // https://myhouse.fly.dev/api/v1/
  // http://localhost:5000/api/v1
  // localhost:5000/api/v1
});
