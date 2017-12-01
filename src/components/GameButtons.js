import React, { Component } from 'react';

class GameButtons extends Component{
	render(){
		return(
			<div className="col-sm-12">
				<div className="col-sm-4">
					<button onClick={this.props.dealFunction} className="btn btn-lg btn-default">Deal</button>
				</div>
				<div className="col-sm-4">
					<button onClick={
						()=>{this.props.betFunction(10)}
					} 
						className="btn btn-lg btn-primary">Bet 10</button>
				</div>
				<div className="col-sm-4">
					<button onClick={
						()=>{this.props.betFunction(100)}
					} 
						className="btn btn-lg btn-danger">Bet 100</button>
				</div>

			</div>		
	
		);
	}
}

export default GameButtons;