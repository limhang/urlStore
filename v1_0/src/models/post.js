import * as usersService from '../services/post';
import storageTokenKey from '../constants.js';
import {routerRedux} from 'dva/router';

let getState = (state) => state.postlist;

export default {
  namespace: 'postlist',
  state: {
      item : null,
      kdtag : null,
      kdcategory : null,
      kddetail : null,
    list : [],
    total : null,
    page : null,
      tag : [],
      urlcategory : [],
  },
  reducers: {
    save(state, { payload: {list,total,page,urlcategory,item,kdtag,kdcategory,kddetail}}) {
        return { ...state, list, total, page,urlcategory,item,kdtag,kdcategory,kddetail};
    },

      savelistdata(state,{payload:{list,total,page}}) {
        return {...state, list,total,page};
      }

  },
  effects: {
    *fetch({payload}, { call, put, select}) {
        // if(!payload['item']) {
        //     yield put({type:'save',payload:payload});
        // } else {
        //     yield put({type:'save',payload:payload});
        // }
    yield put({type:'save',payload:payload});
    let project = yield select(getState); // <-- get the postlist

    const token = window.localStorage.getItem(storageTokenKey);
      const res = {...project,...payload,'token' : token};
    console.log(project);
    console.log(payload);
    console.log(res);

    const data = yield call(usersService.fetch,res);
      if (data) {
        const list = data['data']['datas']['lists'];
        const total = data['data']['datas']['total'];
        const page = data['data']['datas']['page'];
        const values = {list,total,page};
        yield put({type:'savelistdata',payload:values});
      } else {
      }
     },

      *addUrl({payload},{call,put}) {
          const token = window.localStorage.getItem(storageTokenKey);
          // const {Url,tag,detail,category} = payload;
          const data = {...payload,'token':token};
          yield call(usersService.addUrl,data);
          yield put({type:'fetch',payload:null});
      },

      *editUrl({payload},{call,put}) {
        const token = window.localStorage.getItem(storageTokenKey);
        const {Url,tag,detail,category} = payload['values'];
        const {key} = payload;
        const {current} = payload;
        const data = {Url,tag,detail,category,'token':token, 'key':key};
        // if (url) {
          yield call(usersService.editUrl,{data});
          yield put({type:'fetch',payload:null});

      },

      *remove({payload},{call,put}) {
          const token = window.localStorage.getItem(storageTokenKey);
          const data = {...payload,'token':token};
          yield call(usersService.remove,data);
          yield put({type:'fetch',payload:null});
      },

      *category({payload},{call,put}){
          const token = window.localStorage.getItem(storageTokenKey);
          const res = {...payload,'token' : token};
          const data = yield call(usersService.category,res);
          if (data) {
              const urlcategory = data['data']['datas']['category'];
              yield put({type:'save',payload:{urlcategory}});
          } else {
          }
      },

      *tag({payload},{call,put}){
          const token = window.localStorage.getItem(storageTokenKey);
          const res = {...payload,'token' : token};
          const data = yield call(usersService.tag,res);
          if (data) {
              const urlcategory = data['data']['datas']['tag'];
              yield put({type:'save',payload:{urlcategory}});
          } else {
          }
      },

      *getIntoCategory({payload,callback},{call,put}) {
          const token = window.localStorage.getItem(storageTokenKey);
          const res = {...payload, 'token':token};
          const data = yield call(usersService.fetch,res);
          if (data) {
              const list = data['data']['datas']['lists'];
              const total = data['data']['datas']['total'];
              const page = data['data']['datas']['page'];
              const values = {...payload,list,total,page};
              yield put({type:'save',payload:values});
              callback();
          } else {
              console.log('something wrong');
          }
      }
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/users') {
          dispatch({ type: 'fetch', payload: query });
        } else if (pathname === '/postlist') {
          dispatch({type: 'fetch', payload: query});
        } else if (pathname === '/category') {
            dispatch({type: 'category', payload: query});
        } else if (pathname === '/tag') {
            dispatch({type: 'tag',payload:query});
        }
      });
    },
  },
};
