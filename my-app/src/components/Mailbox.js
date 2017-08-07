import React, {Component} from 'react';

class MailBox extends React.Component{

	constructor(props){
		super(props);

		this.state = {isLoggedIn:true}
	};


	render(){
		const isLoggedIn  = this.state.isLoggedIn;
		return(
			<div>
				<h1>Hello</h1>
				The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
			</div>
		);

	}
}

export default MailBox;