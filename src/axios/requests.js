import axios from 'axios';

const API_URL = 'http://localhost:3000';

export function getClimbs() {
  return axios.get(`${API_URL}/routes`);
}
