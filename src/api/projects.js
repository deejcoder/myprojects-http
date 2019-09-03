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
 * @param {string} id the ID of the project
 */
async function getProject(id) {
    let response = await request({ method: 'get', resource: `/project/${id}/` });
    let project = response.data;

    project.content = convertNewlines(project.content);
    return project;
}

/**
 * updateProject updates a project
 * @param {string} id project id
 * @param {*} project new project information
 */
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
 * deleteProject deletes an existing project with the provided ID
 * @param {string} id 
 */
async function deleteProject(id) {
    let response = await request({ 
        method: 'delete', 
        resource: `/project/${id}/delete`, 
        token: getToken() 
    });

    if(response.status === 404) {
        return false;
    }
    return true;
}

/**
 * convertNewlines converts all \\n into \n, since json encodes \n as \\n
 * @param {*} string 
 */
function convertNewlines(string) {
    let regex = /\\n/gi;
    return string.replace(regex, '\n');
}

export { getProjectList, getProject, updateProject, deleteProject };