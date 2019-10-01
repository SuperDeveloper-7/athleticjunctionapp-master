import axios from "axios"

// For debugging with xdebug:
// const options = {
//     headers: {'Cookie':'XDEBUG_SESSION=XDEBUG_ECLIPSE'}
// };
const options = {};

//export const API_URL = 'https://localhost:8000';

export const API_URL = 'https://athleticjunctionevents.herokuapp.com';
// export const API_URL = 'https://fgh.ngrok.io';

export const get = (endpoint) => {
    return axios.get(`${API_URL}${endpoint}`);
};

export const post = (endpoint, data) => {
    return axios.post(`${API_URL}${endpoint}`, data, options);
};