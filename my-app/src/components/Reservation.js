import React, {Component} from 'react';

class Reservation extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			isGoing: true,
			numberOfGuests: 2
		};

		this.handleInputChange = this.handleInputChange.bind(this);		
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInputChange(event) {
	    const target = event.target;
	    const value = target.type === 'checkbox' ? target.checked : target.value;
	    const name = target.name;

	    this.setState({
	      [name]: value
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
					Is going:
					<input name = "isGoing" type = "checkbox" checked = {this.state.isGoing} onChange = {this.handleInputChange} />
				</label>
				<br />
				 <label>
			          Number of guests:
			          <input
			            name="numberOfGuests"
			            type="number"
			            value={this.state.numberOfGuests}
			            onChange={this.handleInputChange} />
			        </label>
			</form>
		);
	}
}

export default Reservation;