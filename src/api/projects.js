import { request } from './requests';
import { getToken } from './auth';

/**
 * getProjectList gets the full list of projects
 */
async function getProjectList() {
    let response = await request({ method: 'get', resource: '/projects' });
    return response.data;
}

/**
 * getProject fetches the project with the given ID
 * @param {int} id the ID of the project
 */
async function getProject(id) {
    let response = await request({ method: 'get', resource: `/project/${id}/` });
    let project = response.data;

    project.content = convertNewlines(project.content);
    return project;
}

async function updateProject({ id, project }) {
    let response = await request({ 
        method: 'post', 
        resource: `/project/${id}/update`, 
        payload: project,
        token: getToken() 
    }).catch(errorResp => {
        return Promise.reject(errorResp)
    });
    return response;
}

/**
 * convertNewlines converts all \\n into \n, since json encodes \n as \\n
 * @param {*} string 
 */
function convertNewlines(string) {
    let regex = /\\n/gi;
    return string.replace(regex, '\n');
}

export { getProjectList, getProject, updateProject };