import * as axios from 'axios';

const host = "http://localhost:3000";

const instance = axios.create({
  timeout: 30000,
});

/**
 * Send a GET request
 * @param {string} path - Path to be appended to host URL
 */
export const get = path => new Promise(
  (resolve, reject) => instance.get(`${host}/${path}`)
    .then(res => resolve(res))
    .catch(err => reject(err.response)),
);

/**
 * Send a POST request
 * @param {string} path - Path to be appended to host URL
 * @param {any} params - Params to be sent with the request
 */
export const post = (path, params) => new Promise(
  (resolve, reject) => instance.post(`${host}/${path}`, params)
    .then(res => resolve(res))
    .catch(err => reject(err.response))
);