import React, {Component} from 'react';

class NameForm extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			nameValue: '',
			textareaVal:'some info'
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event){
		this.setState({
			nameValue: event.target.value,
			textareaVal: event.target.value
		});		
	}

	handleSubmit(event){
		alert("A name was sumbitted"+ this.state.value);
		alert("A textarea was sumbitted"+ this.state.textareaVal);
		event.preventDefault();
	}
	render(){
		
		return(
			<form onSubmit = {this.handleSubmit}>
				<label>
					Name: <input type="text" value = {this.state.nameValue} onChange  = {this.handleChange} />
					<textarea value = {this.state.textareaVal} onChange = {this.handleChange} />
				</label>
				<input type="submit" value="submit" />
			</form>
		);
	}
}

export default NameForm;