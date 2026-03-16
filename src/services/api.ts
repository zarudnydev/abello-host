import axios from 'axios';

export const API_URL = 'https://dummyjson.com';

export const api = axios.create({
  baseURL: '/api',
  withCredentials: true,
});
