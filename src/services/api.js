import axios from 'axios';

const api = axios.create({baseURL:'https://trabweb2.herokuapp.com'});

export default api;