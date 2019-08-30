import axios from 'axios';


// const BASE_URL = 'http://me.thecodingkiwi.com:8080'
const BASE_URL = 'http://localhost:8080'


const client = axios.create({
    baseURL: BASE_URL,
    json: true,
});


export default class APIClient {

    /**
     * getProjectList gets the full list of projects
     */
    getProjectList() {
        return this._fetch('get', '/projects');
    }

    /**
     * getProject fetches the project with the given ID
     * @param {int} id the ID of the project
     */
    async getProject(id) {
        let project = await this._fetch('get', `/project/${id}`);

        project.content = this.convertNewlines(project.content);
        return project;
    }

    /**
     * convertNewlines converts all \\n into \n, since json encodes \n as \\n
     * @param {*} string 
     */
    convertNewlines(string) {
        let regex = /\\n/gi;
        return string.replace(regex, '\n');
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