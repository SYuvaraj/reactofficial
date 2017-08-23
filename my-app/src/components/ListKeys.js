import React, {Component} from 'react';

class ListKeys extends React.Component{

	render(){
		const number = [1,2,3,4,5];
		const doubled = number.map((number) => number * 2);
		console.log('numbers',doubled);
		return(
			<div>
				{/*basic rendering*/}
				{doubled}
				
			</div>
		);
	}
}

export default ListKeys;