import React, {Component} from 'react';


class WarningBanner extends React.Component{

	constructor(props){
		super(props);

		
	};

	render(){
		if(!this.props.warn){
			return null;
		}
		 return (
		    <div className="warning">
		      Warning!
		    </div>
		  );

	}
}

export default WarningBanner;