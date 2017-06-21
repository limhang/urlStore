import * as usersService from '../services/app';
import storageTokenKey from '../constants.js';
import {routerRedux} from 'dva/router';

export default {
  namespace: 'app',
  state: {
  	islogin: false,
  	account: {
  		username: null
  	}
  },
  reducers: {
    authSuccess(state, { payload: username }) {
      return { ...state, username, islogin:true };
    },
  },
  effects: {
    *auth({payload}, { call, put }) {
      console.log(payload);
      const {username, password} = payload;
      const {data} = yield call(usersService.auth,{username,password});
      if (data) {
        const token = data['datas']['0']['token'];
        const username = data['datas']['0']['username'];
        window.localStorage.setItem(storageTokenKey, token);
        yield put({type:'authSuccess',payload:username});
        yield put(routerRedux.push('/postlist'));
      } else {
        console.log('something wrong');
      }
     }
  },
  subscriptions: {

  },
};