import http from './http';

const sendRSVP = (data: object) => {
    return http.post('/rsvp', data);
};

export default sendRSVP;