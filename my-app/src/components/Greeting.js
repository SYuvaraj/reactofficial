import React, {Component} from 'react';
import UserGreeting from './UserGreeting.js';
import GuestGreeting from './GuestGreeting.js';

class Greeting extends React.Component{

	constructor(props){
		super(props);
	};


	render(){

		const isLoggedIn = this.props.isLoggedIn;
		if(isLoggedIn){
			return <UserGreeting />;
		}
		else{
			return <GuestGreeting />;
		}

	}
}

export default Greeting;