import axios from 'axios';


// const BASE_URL = 'http://me.thecodingkiwi.com:8080'
const BASE_URL = 'http://localhost:8080'


const client = axios.create({
    baseURL: BASE_URL,
    json: true,
})


export default class APIClient {

    
    getProjectList() {
        return this._fetch('get', '/projects');
    }

    async _fetch(method, resource, payload) {
        return client({
            method,
            url: resource,
            payload,
            headers: {},
        }).then(resp => {
            return resp.data ? resp.data: [];
        })
    }
}