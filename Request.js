import axios from "axios"

// For debugging with xdebug:
// const options = {
//     headers: {'Cookie':'XDEBUG_SESSION=XDEBUG_ECLIPSE'}
// };
const options = {};

//export const API_URL = 'http://192.168.6.211';

//export const API_URL = 'https://athleticjunctionevents.herokuapp.com';
export const API_URL = 'https://www.athleticjunctionevents.com';
// export const API_URL = 'https://fgh.ngrok.io';

export const get = (endpoint) => {
    return axios.get(`${API_URL}${endpoint}`);
};

export const post = (endpoint, data) => {
    console.log('post url',`${API_URL}${endpoint}`);
    return axios.post(`${API_URL}${endpoint}`, data, options);
};