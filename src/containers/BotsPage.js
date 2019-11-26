import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  state = {
    allBots: [],
    armyBots: [],
    searchText: ""
  }

  updateSearchText = (text) => {
    this.setState({
      searchText: text
    })
  }

  fetchBots = () => {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        allBots: data
      })
    })
  }

  componentDidMount() {
    this.fetchBots();
  }

  addBotToArmy = (bot) => {
    this.setState((prevState) => {
      return {armyBots: prevState.armyBots.concat(bot)}
    })
  }

  removeBotFromArmy = (bot) => {
    const updateArmy = this.state.armyBots.filter((b) => {
      return bot.id !== b.id
    })
    this.setState({
      armyBots: updateArmy
    })
  }


  render() {

    const {allBots, armyBots} = this.state

    return (
      <div>
        <YourBotArmy armyBots={armyBots} removeBotFromArmy={this.removeBotFromArmy}/>
        <BotCollection allBots={allBots} addBotToArmy={this.addBotToArmy} updateSearchText={this.updateSearchText}/>
      </div>
    );
  }

}

export default BotsPage;
