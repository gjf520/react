import React from 'react';
import ReactDom from 'react-dom';
import './css/style.css';
import {Router, Route,hashHistory} from 'react-router';
import IndexComponent from './component/index/index.js';
import 'antd/dist/antd.css';
import DetailComponent from './component/detail/index.js';
import TouchIndexComponent from './component/touch/index.js';
import TouchDetailComponent from './component/touch/index.js';
import MediaQuery from 'react-responsive';
class Root extends React.Component {
	handleEnter(nextState,replaceState){
		
		try{
			if(window.localStorage && !window.localStorage.login){
				replaceState({pathname:'/'})
			}

		}catch(e){}
		// var login=false;
		// if(!login){
		// 	replaceState({pathname:'/'}9*)
		// }
		console.log(window.localStorage.login)
}

// <MediaQuery query='(min-device-width: 1024px)'></MediaQuery>  适应屏幕的操作
	render() {
		return(
		<div className="main">
				<Router history={hashHistory}>
					<Route path='/'   component={IndexComponent}></Route>
					<Route path='/detail/:id' component={DetailComponent}  onEnter={this.handleEnter}></Route>
				</Router>
				
		</div>
		)
	}

}
ReactDom.render(<Root/>,document.getElementById("root"))