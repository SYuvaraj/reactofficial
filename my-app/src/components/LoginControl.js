import React, {Component} from 'react';
import UserGreeting from './UserGreeting.js';
import GuestGreeting from './GuestGreeting.js';
import Greeting from './Greeting.js';
import LoginButton from './LoginButton.js';
import LogoutButton from './LogoutButton.js';

class LoginControl extends React.Component{

	constructor(props){
		super(props);
		this.handleLoginClick = this.handleLoginClick.bind(this);
		this.handleLogoutClick = this.handleLogoutClick.bind(this);
		this.state  = {isLoggedIn:false};
	}

	handleLoginClick(){
		console.log('clicked');
		this.setState({isLoggedIn:true});
	}

	handleLogoutClick(){
		console.log('clicked');
		this.setState({isLoggedIn:false});
	}


	render(){

		const isLoggedIn = this.state.isLoggedIn;
		let button = null;

		if(isLoggedIn){
			button = <LogoutButton onClick = {this.handleLogoutClick} />;
		}
		else{
			button = <LoginButton onClick = {this.handleLoginClick} />;
		}
		return(
			<div>
				<Greeting isLoggedIn = {isLoggedIn} />
				{button}
			</div>
		);

	}
}

export default LoginControl;