import axios from 'axios';

export default axios.create({
    baseURL: "https://teste-ferreri-api.herokuapp.com",
    responseType: "json",
});