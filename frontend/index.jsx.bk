import React from 'react';
import ReactDOM from 'react-dom';
import purecss from 'purecss';
import Footer from './app/Util/footer.jsx';
import Header from './app/Util/header.jsx';
import { Router, Route, Link ,hashHistory} from 'react-router'
import { IndexRoute } from 'react-router';
import Nav from './app/Home/homeNav.jsx';
import Shopping from './app/cloudShopping/Shopping.jsx';
import GameList from './app/Paradise/gameList.jsx';
import Me from './app/Me/Me.jsx';
import Merchant from './app/Merchant/Merchant.jsx';
import Main from './app/Main/Main.jsx';


ReactDOM.render((
		<Router  history={hashHistory} >
			<Route path="/" component={Main}>
				<IndexRoute component={Nav} />
				<Route path="/Me" component={Me} />
				<Route path="/Home" component={Nav} />
				<Route path="/Game" component={GameList} />
				<Route path="/Shopping" component={Shopping} />
				<Route path="/Merchant" component={Merchant} />
			</Route>
		</Router>
), document.getElementById('content'));

