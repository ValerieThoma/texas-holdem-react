import React, { Component } from 'react';
import Deck from "../utilityClasses/Deck";
import PokerHand from "./PokerHand";
import GameButtons from './GameButtons';
import ThePot from './ThePot';

var cards = new Deck();


class PokerTable extends Component{
	constructor(props){
		super(props);
		this.state = {
			dealersHand: ['deck','deck'],
			playersHand: ['deck','deck'],
			communityCards: ['deck','deck','deck','deck','deck'],
			wager: 0,
			bankRoll: 1000
		}
		this.prepDeck = this.prepDeck.bind(this);
		this.draw = this.draw.bind(this);
		this.playerBet = this.playerBet.bind(this);
	}
	componentDidMount(){
		// this.prepDeck();
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
	draw(){
		// call this method whenever a community card must be drawn
		var communityNewHand = this.state.communityCards;
		if(communityNewHand[0] === 'deck'){
			communityNewHand = [cards.deck.shift(),cards.deck.shift(),cards.deck.shift(),];
		}else{
			communityNewHand.push(cards.deck.shift());
		}
		this.setState({
			communityCards: communityNewHand
		})
	}
	playerBet(amount){
		const newWager = this.state.wager + amount;
		this.setState({
			wager: newWager
		})
		this.draw();
	}
	render(){
		console.log(this.state.playersHand);
		return(
			<div className="cols-sm-12 the-table">
				<ThePot wager={this.state.wager} />
				<PokerHand cards={this.state.dealersHand} />
				<PokerHand cards={this.state.communityCards} />
				<PokerHand cards={this.state.playersHand} />
				<GameButtons  dealFunction={this.prepDeck} betFunction={this.playerBet}/>


			</div>
		)
	}
}



export default PokerTable;