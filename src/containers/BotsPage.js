import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  constructor(){
    super()

    this.state = {
      bots: [],
      armyBots: []
    }

  }

  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(resp => resp.json())
    .then(bots => this.setState({bots: bots}) )
  }

  addArmy = (bot) => {
    this.setState ({
      armyBots: [...this.state.armyBots, bot]
    })
  }

  removeArmy = bot => {
    const newArmyArray = this.state.armyBots.filter(
      armyBot => armyBot.id !== bot.id
    );

    this.setState({ armyBots: newArmyArray });
  };

  render() {
    return (
      <div>
        <YourBotArmy armyBots={this.state.armyBots} removeArmy={this.removeArmy}/>
        <BotCollection bots={this.state.bots}  addArmy={this.addArmy}/>
      </div>
    );
  }

}

export default BotsPage;
