import React, { Component } from 'react';

class Clock extends React.Component{



  render(){  
    return(
       <div>
           <h1>It is {new Date().toLocaleTimeString()} </h1>
        </div>
   
    );
  }
}



export default Clock;