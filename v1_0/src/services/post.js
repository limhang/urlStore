import request from '../utils/request';
import { PAGE_SIZE } from '../constants';


export function fetch(data ) {
    var {token, page, pagenum,item,kdcategory,kdtag,kddetail} = data;
    if (!page) { page = 1;}
    if (!pagenum) {pagenum = 6;}
    // if (page) {
        return request(`/api/v1_0/url/user/urlquery?token=${token}&page=${page}&pagenum=${pagenum}&item=${item}&category=${kdcategory}&tag=${kdtag}&detail=${kddetail}`);

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


export function category(data ) {
    const {token} = data;
    return request(`/api/v1_0/url/user/urlquerycategory?token=${token}`);
}

export function tag(data ) {
    const {token} = data;
    return request(`/api/v1_0/url/user/urlquerytag?token=${token}`);
}
