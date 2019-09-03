import axios from 'axios';

// const BASE_URL = 'http://me.thecodingkiwi.com:8080'
const BASE_URL = 'http://localhost:8080'

const client = axios.create({
    baseURL: BASE_URL,
    json: true,
});


function request({method, resource, payload, header, token}) {
    return client({
        method: method,
        url: resource,
        data: payload,
        headers: token ? { ...header, authorization: `Bearer ${token}`} : header,
    }).then((resp) => {
        return {
            status: resp.status,
            data: resp.data || null,
            error: null
        }
    }).catch((error) => {
        return Promise.reject({
            status: error.response.status,
            formErrors: error.response.data.formErrors,
            error: error.message
        });
    })
}

export { request };