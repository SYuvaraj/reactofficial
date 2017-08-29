import React, {Component} from 'react';

class NameForm extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			nameValue: '',
			textareaVal:'some info',
			selecVal: 'coconut'
		};

		this.handleChange = this.handleChange.bind(this);
		this.handletextAreaChange = this.handletextAreaChange.bind(this);
		this.handleSelectVal  = this.handleSelectVal.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event){
		this.setState({
			nameValue: event.target.value,
		});		
	}

	handletextAreaChange(event){
		this.setState({
			textareaVal: event.target.value
		});		
	}

	handleSelectVal(event){
		this.setState({
			selecVal: event.target.value
		});	
	}
	handleSubmit(event){
		alert("A name was sumbitted "+  this.state.nameValue);
		alert("A textarea was sumbitted "+ this.state.textareaVal);
		alert('Your favorite flavor is: ' + this.state.selecVal);
		event.preventDefault();
	}
	render(){
		
		return(
			<form onSubmit = {this.handleSubmit}>
				<label>
					Name: <input type="text" value = {this.state.nameValue} onChange  = {this.handleChange} />
					<textarea value = {this.state.textareaVal} onChange = {this.handletextAreaChange} />
					<select value = {this.state.selecVal} onChange = {this.handleSelectVal}>
						<option value="grapefruit">Grapefruit</option>
			            <option value="lime">Lime</option>
			            <option value="coconut">Coconut</option>
			            <option value="mango">Mango</option>
					</select>
				</label>
				<input type="submit" value="submit" />
			</form>
		);
	}
}

export default NameForm;