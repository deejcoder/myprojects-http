import { BehaviorSubject } from 'rxjs';

import { request } from './requests';


const tokenSubject = new BehaviorSubject(sessionStorage.getItem("token"))
const validationSubject = new BehaviorSubject(false);

/**
 * login requests a new jwt token for the user and validates it
 * @param {*} secretKey 
 */
async function login(secretKey) {
    let { response, body } = await request({ 
        method: 'post', 
        resource: '/auth/login', 
        payload: {
            "secret_key": secretKey
        }
    });

    if(!response.ok) {
        return false;
    }
    let token = body.data.token;

    if(token != null) {
        // check the token is valid
        sessionStorage.setItem("token", token);
        tokenSubject.next(token);
        return true;
    }
    return false;
}

function logout() {
    if(!tokenSubject.getValue()) { return }

    sessionStorage.removeItem("token");
    tokenSubject.next(null);
}

/**
 * validate checks if a user is validated with a valid jwt token
 */
async function validate() {
    if(!tokenSubject.getValue()) { return false }

    let { response, _ } = await request({
        method: 'get',
        resource: '/auth/validate',
        token: tokenSubject.getValue()
    })

    if(!response.ok) {
        return false;
    }
    return true
}

async function isValidated() {
    let validated = await validate();
    validationSubject.next(validated);
    return validated;
}

function getToken() {
    return tokenSubject.getValue();
}

export { login, logout, isValidated, getToken };