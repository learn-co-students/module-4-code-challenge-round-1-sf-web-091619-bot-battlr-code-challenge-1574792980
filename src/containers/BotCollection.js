import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs";


class BotCollection extends React.Component {
  //your code here
  state = {
    selectedBot: {}
  }

  addBot = (bot) => {
    this.setState({
      selectedBot: bot
    })
  }

  goBack = () => {
    this.setState({
		selectedBot: {}
	})
  }


  render(){

	if (!this.state.selectedBot.id) {

		return (
			<div className="ui four column grid">
				<div className="row">
				{this.props.allBots.map(bot => {
					return <BotCard key={bot.id} bot={bot} handleClick={this.addBot} />
				})}
				</div>
			</div>
		);

	} else {
		return (
		  <BotSpecs bot={this.state.selectedBot} enlistBot={this.props.enlistBot} goBack={this.goBack}
		  />
		);
	}
  }

};

export default BotCollection;


