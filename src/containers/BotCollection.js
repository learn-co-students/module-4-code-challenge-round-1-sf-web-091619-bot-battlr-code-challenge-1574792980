import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from '../components/BotSpecs'

class BotCollection extends React.Component {
	//your code here
	state = {
		showBotDetails: false,
		bot: ""
	}

	updateBotDetails = (bot) => {
		this.setState((prevState) => {
			return {
				showBotDetails: !prevState.showBotDetails,
				bot: bot
			}
		})
	}

	showAllBots = () => {
		this.setState({
			showBotDetails: false
		})
	}

	// handleClick = (e) => {
	// 	this.props.updateSearchText(event.target.value)
	// }
	// onClick = { this.handleClick }

  render(){

		const { allBots, addBotToArmy } = this.props

  	return (
		<div>
			<div>
				<label htmlFor="name">Search By Bot Name: </label>
					<input type="text" placeholder="name" id="name" ></input>
				<button>Search</button>
			</div>
  	  <div className="ui four column grid">
    		
				{this.state.showBotDetails ? <div><BotSpecs bot={this.state.bot} handleBotClick={addBotToArmy} showAllBots={this.showAllBots} /></div> : <div className="row">{allBots.map(bot =>
						<BotCard key={bot.id} bot={bot} handleBotClick={this.updateBotDetails} />
						)}</div>
				}

				</div>
  	  </div>
  	);
  }

};

export default BotCollection;
