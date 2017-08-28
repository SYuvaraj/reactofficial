import React, {Component} from 'react';

class ListKeys extends React.Component{

	render(){
		const number = [1,2,3,4,5];
		const doubled = number.map((number) => number * 2);
		console.log('numbers',doubled);
		const listItems =  number.map((number) =>
			<li>{number}</li>
		);
		return(
			<div>
				{/*basic rendering*/}
				<ul><li>{listItems}</li></ul>
				
				
			</div>
		);
	}
}

export default ListKeys;