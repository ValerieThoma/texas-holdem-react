import React, { Component } from 'react';
import Deck from "../utilityClasses/Deck";
import PokerHand from "./PokerHand";

var cards = new Deck();


class PokerTable extends Component{
	constructor(props){
		super(props);
		this.state = {
			dealersHand: [],
			playersHand: [],
			communityCards: []
		}
		this.prepDeck = this.prepDeck.bind(this);
	}
	componentDidMount(){
		this.prepDeck();
	}

	prepDeck(){ //this function is specific for texasholdem (left it out of utilityClasses)
		cards.createDeck();
		cards.shuffleDeck();
		var card1 = cards.deck.shift();
		var card2 = cards.deck.shift();
		var card3 = cards.deck.shift();
		var card4 = cards.deck.shift();
		//we mutated the deck 4 times with 'shift', cards.deck now has a length of 48
		var playersHand = [card1, card3];
		var dealersHand = [card2, card4];
		this.setState({
			playersHand: playersHand,
			dealersHand: dealersHand
		});
	}
	render(){
		console.log(this.state.playersHand);
		return(
			<div className="cols-sm-12 the-table">
				<PokerHand cards={this.state.dealersHand} />
				<PokerHand cards={this.state.communityCards} />
				<PokerHand cards={this.state.playersHand} />


			</div>
		)
	}
}



export default PokerTable;