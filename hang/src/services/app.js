import request from '../utils/request';

const host = 'http://urlapi.coderhelper.cn/';

export function auth({ username, password }) {
  // return request(`${host}api/v1_0/person/user/login?username=${username}&password=${password}`);
    return request(`${host}v1_0/person/user/login?username=${username}&password=${password}`);

    // return request(`/api/v1_0/person/user/login?username=${username}&password=${password}`);

}

