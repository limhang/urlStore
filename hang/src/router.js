import React from 'react';
import { Router, Route } from 'dva/router';
// import IndexPage from './routes/IndexPage';
// import Users from './routes/Users';
import Login from './routes/Login';
import PostList from './routes/PostList';
import Register from './routes/Register';
import Category from './routes/Category';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
        <Route path="/" component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/postlist" component={PostList} />
        <Route path="/category" component={Category} />
    </Router>
  );
}

export default RouterConfig;
