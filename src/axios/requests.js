import axios from 'axios';

const API_URL = 'http://localhost:3000';

// climbs

export function getClimbs() {
  return axios.get(`${API_URL}/routes`);
}

export function postClimbs(reqBody) {
  return axios.post(`${API_URL}/climbs`, reqBody);
}

export function putClimbs() {
  return axios.put(`${API_URL}/routes`);
}

export function deleteClimbs() {
  return axios.delete(`${API_URL}/routes`);
}

// notes

export function getNotes() {
  return axios.get(`${API_URL}/notes`);
}

export function postNotes(reqBody) {
  return axios.post(`${API_URL}/notes`, reqBody);
}

export function deleteNotes(id) {
  return axios.delete(`${API_URL}/notes/${id}`);
}

export function routeNoteJoin(reqBody) {
  return axios.post(`${API_URL}/route/notes`, reqBody);
}
