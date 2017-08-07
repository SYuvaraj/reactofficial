import React, {Component} from 'react';
import LoginControl from './LoginControl.js';
import LogoutButton from './LogoutButton.js';
import LoginButton from './LoginButton.js';

class MailBox extends React.Component{

	constructor(props){
		super(props);

		this.handleLoginClick = this.handleLoginClick.bind(this);
		this.handleLogoutClick = this.handleLogoutClick.bind(this);

		this.state = {isLoggedIn:true}



	};

	handleLoginClick(){
		console.log('clicked');
		this.setState({isLoggedIn:true});
	}

	handleLogoutClick(){
		console.log('clicked');
		this.setState({isLoggedIn:false});
	}
	
	render(){
		const isLoggedIn  = this.state.isLoggedIn;
		return(
			<div>
				<h1>Hello</h1>
				The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
				{ isLoggedIn ? (
					<LogoutButton onClick = {this.handleLogoutClick} />) : 
					(
						<LoginButton onClick = {this.handleLoginClick} />
					)
				}
			</div>
		);

	}
}

export default MailBox;