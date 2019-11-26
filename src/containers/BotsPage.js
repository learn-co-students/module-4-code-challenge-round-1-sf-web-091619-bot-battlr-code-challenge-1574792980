import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'


class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    allBots: [],
    myArmy: []
  }

  componentDidMount() {
    this.fetchBots()
  }

  fetchBots() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(res => res.json())
    .then(data => {
      this.setState({
        allBots: data
      })
    })
  }

  enlistBot = (bot) => {
    this.setState({
      myArmy: [...this.state.myArmy, bot]
    })
  }

  removeBot = (bot) => {
    let newArmy = this.state.myArmy.filter(armyBot => {
      return armyBot.id !== bot.id
    })
    this.state.myArmy.includes(bot) ? this.setState({
      myArmy: newArmy
    }) : console.log("hello")
  }

  render() {
    return (
      <div>
        <BotCollection allBots={this.state.allBots} enlistBot={this.enlistBot} />
        <YourBotArmy myArmy={this.state.myArmy} removeBot={this.removeBot} />
      </div>
    );
  }

}

export default BotsPage;
