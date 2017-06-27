import React from 'react';
import ReactDOM from 'react-dom';
import purecss from 'purecss';
import { Router, Route, Link ,hashHistory} from 'react-router'
import { IndexRoute } from 'react-router';
import Shopping from './app/cloudShopping/Shopping.jsx';
import Login from './app/Login/Login.jsx';
import Main from './app/Main/Main.jsx';


ReactDOM.render((
		<Router  history={hashHistory} >
			<Route path="/" component={Main}>
				<IndexRoute component={Login} />
                <Route path="/Login" component={Login} />
				<Route path="/Shopping" component={Shopping} />
			</Route>
		</Router>
), document.getElementById('content'));

