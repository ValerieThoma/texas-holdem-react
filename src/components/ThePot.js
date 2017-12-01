import React from 'react';


function ThePot(props){
	return(
		<div className="col-sm-12 text-center the-pot">
			<h2>Current wager ${props.wager}</h2>
		</div>
	)
}

export default ThePot;
