import React from 'react';
import Card from './Card'; 


function PokerHand(props){
	var hand = [];
	props.cards.map((card, index)=>{
		hand.push(<Card key={index} card={card} />)
	})
	return(
		<div className="col-sm-12">
			<h1>{hand}</h1>
		</div>
	)
}

export default PokerHand