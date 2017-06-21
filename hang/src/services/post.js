import request from '../utils/request';
import { PAGE_SIZE } from '../constants';
export function fetch(token ) {
  return request(`/v1_0/url/user/urlquerypage?token=${token}`);
}
