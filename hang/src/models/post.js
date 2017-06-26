import * as usersService from '../services/post';
import storageTokenKey from '../constants.js';
import {routerRedux} from 'dva/router';

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

  },
  effects: {
    *fetch({payload}, { call, put }) {
      console.log('xxxxxxx');
      console.log(payload);
      console.log(state);
      const token = window.localStorage.getItem(storageTokenKey);
      const res = {...payload,'token' : token};
      const data = yield call(usersService.fetch,res);
      if (data) {
        console.log(data);
        const list = data['data']['datas']['lists'];
        const total = data['data']['datas']['total'];
        const page = data['data']['datas']['page'];
        const values = {list,total,page};
        yield put({type:'save',payload:values});
      } else {
        console.log('something wrong');
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
        console.log(current);
        const data = {Url,tag,detail,category,'token':token, 'key':key};
        // if (url) {
          yield call(usersService.editUrl,{data});
          yield put({type:'fetch',payload:{page:current}});
        // } else {
        //   console.log('无效网址');
        // }
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
          console.log('test');
          const data = yield call(usersService.category,res);
          console.log('category---');
          console.log(data);
          if (data) {
              const urlcategory = data['data']['datas']['category'];
              console.log(urlcategory);
              yield put({type:'save',payload:{urlcategory}});
          } else {
              console.log('something wrong');
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
              console.log(values);
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
          console.log('xxxxx');
          dispatch({type: 'fetch', payload: query});
        } else if (pathname === '/category') {
            dispatch({type: 'category', payload: query});
        }
      });
    },
  },
};
