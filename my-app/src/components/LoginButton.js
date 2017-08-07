import React, {Component} from 'react';


class LoginButton extends React.Component{

	constructor(props){
		super(props);
	};


	render(){

		return(
			<div>
				<button onClick={this.props.onClick}>Login</button>
			</div>
		);

	}
}

export default LoginButton;