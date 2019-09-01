import axios from 'axios';

// const BASE_URL = 'http://me.thecodingkiwi.com:8080'
const BASE_URL = 'http://localhost:8080'

const client = axios.create({
    baseURL: BASE_URL,
    json: true,
});


async function request({method, resource, payload, header, token}) {
    try {
        let resp = await client({
            method: method,
            url: resource,
            data: payload,
            headers: token ? { ...header, authorization: `Bearer ${token}`} : header,
        })
        return {
            data: resp.data || [],
            error: null
        }
    }
    catch(error) {
        return {
            data: null,
            error: error
        }
    }
}

export { request };