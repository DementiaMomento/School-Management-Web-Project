import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:9000/api/user/';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_URL + 'mod', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }

  getEvents() {
    return axios.get(API_URL + 'events', { headers: authHeader() });
  }

  addEvent() {
    return axios.get(API_URL + 'add_event', { headers: authHeader() });
  }
}

export default new UserService();