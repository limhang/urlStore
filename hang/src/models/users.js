import * as usersService from '../services/users';

export default {
  namespace: 'users',
  state: {
    list: [],
    total: null,
    page: null,
  },
  reducers: {
    save(state, { payload: { data: list, total, page } }) {
      console.log('9');
      return { ...state, list, total, page };
    },
  },
  effects: {
    *fetch({ payload: { page = 1} }, { call, put }) {
      console.log('6');
      const { data, headers } = yield call(usersService.fetch, { page });
      console.log('7');
      yield put({
         type: 'save',
         payload: {
           data,
           total: parseInt(headers['x-total-count'], 10),
           page: parseInt(page, 10),
         },
       });
      console.log('8');
     },

     *remove({ payload: id }, { call, put, select }) {
      console.log('1');
      yield call(usersService.remove, id);
      console.log('3');
      const page = yield select(state => state.users.page);
      console.log('4');
      console.log(page);
      yield put({ type: 'fetch', payload: { page } });
      console.log('5');
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      console.log('项目初始化');
      return history.listen(({ pathname, query }) => {
        if (pathname === '/users') {
          dispatch({ type: 'fetch', payload: query });
        } else if (pathname === 'postlist') {
          dispatch({type: '/post/fetch', payload: query});
        }
      });
    },
  },
};