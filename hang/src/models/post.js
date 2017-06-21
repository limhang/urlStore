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
    save(state, { payload: list }) {
      return { ...state, list };
    },
  },
  effects: {
    *fetch({payload}, { call, put }) {
      console.log(payload);
      const token = window.localStorage.getItem(storageTokenKey);
      console.log(token);
      const data = yield call(usersService.fetch,token);
      if (data) {
        console.log(data);
        const list = data['data']['datas']['lists'];
        console.log(list);
        yield put({type:'save',payload:list});
      } else {
        console.log('something wrong');
      }
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