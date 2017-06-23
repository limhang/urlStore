import request from '../utils/request';
import { PAGE_SIZE } from '../constants';


export function fetch(data ) {
    var {token, page, pagenum} = data;
    if (!page) { page = 1;}
    if (!pagenum) {pagenum = 3;}
    // if (page) {
        return request(`/api/v1_0/url/user/urlquerypage?token=${token}&page=${page}&pagenum=${pagenum}`);

    // } else {
    //     return request(`/v1_0/url/user/urlquerypage?token=${token}`);
    // }
}

export function editUrl({data}) {
    const {Url,token,tag,detail,category,key} = data;
    return request(`/api/v1_0/url/user/urlupdate?url=${Url}&token=${token}&tag=${tag}&detail=${detail}&category=${category}&key=${key}`);

}

export function addUrl(data) {
    console.log(data);
    const {Url,token,tag,detail,category} = data;
    return request(`/api/v1_0/url/user/urlcreate?token=${token}&url=${Url}&category=${category}&tag=${tag}&detail=${detail}`);

}

export function remove(data) {
    const {token,key} = data;
    return request(`/api/v1_0/url/user/urldelete?token=${token}&key=${key}`);

}