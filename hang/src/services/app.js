import request from '../utils/request';
export function auth({ username, password }) {
  return request(`/v1_0/person/user/login?username=${username}&password=${password}`);
}

