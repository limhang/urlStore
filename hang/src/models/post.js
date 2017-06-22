import * as usersService from '../services/post';
import storageTokenKey from '../constants.js';
import {routerRedux} from 'dva/router';

export default {
  namespace: 'postlist',
  state: {
    list : [],
    total : null,
    page : null
  },
  reducers: {
    save(state, { payload: {list,total,page}}) {
      return { ...state, list, total, page};
    },
  },
  effects: {
    *fetch({payload}, { call, put }) {
      console.log('xxxxxxx');
      console.log(payload);
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
      }
  },
  subscriptions: {
    setup({ dispatch, history }) {
      console.log('post页面初始化');
      return history.listen(({ pathname, query }) => {
        if (pathname === '/users') {
          dispatch({ type: 'fetch', payload: query });
        } else if (pathname === '/postlist') {
          console.log('xxxxx');
          dispatch({type: 'fetch', payload: query});
        }
      });
    },
  },
};