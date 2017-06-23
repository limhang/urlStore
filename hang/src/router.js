import React from 'react';
import { Router, Route } from 'dva/router';
// import IndexPage from './routes/IndexPage';
// import Users from './routes/Users';
import Login from './routes/Login';
import PostList from './routes/PostList';
import Register from './routes/Register';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
        <Route path="/" component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/postlist" component={PostList} />
    </Router>
  );
}

export default RouterConfig;
