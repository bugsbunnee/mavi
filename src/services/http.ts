import axios from "axios";

const instance = axios.create({
    baseURL: 'http://172.20.10.4:8080/api/v1',
});

export default instance;