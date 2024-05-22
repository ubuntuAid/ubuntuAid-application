// src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://ubuntuaid-backend.onrender.com'
});

export default api;
