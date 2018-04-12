import axios from 'axios';

const httpClient = axios.create();

httpClient.defaults.timeout = 500;

export default httpClient;