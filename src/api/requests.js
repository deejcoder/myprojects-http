import axios from 'axios';

// const BASE_URL = 'http://me.thecodingkiwi.com:8080'
const BASE_URL = 'http://localhost:8080'

const client = axios.create({
    baseURL: BASE_URL,
    json: true,
});


async function request({method, resource, payload, header, token}) {
    let response = await client({
        method: method,
        url: resource,
        data: payload,
        headers: token ? { ...header, authorization: `Bearer ${token}`} : header,
    });

    let head = response.data, body = head.body;
    delete head.body;

    return { response: head, body: body }
}

export { request };