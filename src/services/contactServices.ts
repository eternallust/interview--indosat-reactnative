import axios from 'axios';

const host = axios.create({
  baseURL: 'https://contact.herokuapp.com/',
});

const api = {
  getData: () => host.get('contact'),
};

export default api;
