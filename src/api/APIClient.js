import axios from 'axios';
import { BehaviorSubject } from 'rxjs';


// const BASE_URL = 'http://me.thecodingkiwi.com:8080'
const BASE_URL = 'http://localhost:8080'


const client = axios.create({
    baseURL: BASE_URL,
    json: true,
});

// gets current jwt token
const currentTokenSubject = new BehaviorSubject(sessionStorage.getItem("token"))
// checks validation whenever user refreshes page or loads for first time
const validationSubject = new BehaviorSubject(false);


export default class APIClient {

    constructor() {
        this.token = currentTokenSubject.getValue();
        this.validated = validationSubject.getValue();
    }

    /**
     * getProjectList gets the full list of projects
     */
    async getProjectList() {
        let response = await this._fetch('get', '/projects');
        return response.data;
    }

    /**
     * getProject fetches the project with the given ID
     * @param {int} id the ID of the project
     */
    async getProject(id) {
        let response = await this._fetch('get', `/project/${id}/`);
        let project = response.data;

        project.content = this.convertNewlines(project.content);
        return project;
    }

    /**
     * login requests a new jwt token for the user and validates it
     * @param {*} secretKey 
     */
    async login(secretKey) {
        let response = await this._fetch('post', '/auth/login', {
            "secret_key": secretKey
        });

        if(response.error != null) {
            return false;
        }
        let token = response.data.token;

        if(token != null) {
            // check the token is valid
            sessionStorage.setItem("token", token);
            return true;
        }
        return false;
    }

    /**
     * validate checks if a user is validated with a valid jwt token
     */
    async validate() {
        if(!this.token) { return false }

        let resp = await this._fetch('get', '/auth/validate', {}, {
            authorization: `Bearer ${this.token}`
        })

        if(resp.error != null) {
            return false;
        }

        if(resp.data.validated === true) {
            return true;
        }
        return false;
    }

    async checkValidation() {
        let validated = this.validated;

        if(this.validated === false) {
            validated = await this.validate();
            // multicast to all components that use APIClient
            validationSubject.next(validated);
        }
        return validated;
    }

    /**
     * convertNewlines converts all \\n into \n, since json encodes \n as \\n
     * @param {*} string 
     */
    convertNewlines(string) {
        let regex = /\\n/gi;
        return string.replace(regex, '\n');
    }

    async _fetch(method, resource, payload, headers) {
        return client({
            method: method,
            url: resource,
            data: payload,
            headers: headers,
        }).then(resp => {
            return {
                data: resp.data ? resp.data : [],
                error: null
            }
        }).catch(error => {
            return {
                data: null,
                error: error
            }
        });
    }
}

