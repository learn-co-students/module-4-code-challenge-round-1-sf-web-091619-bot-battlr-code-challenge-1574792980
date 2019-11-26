import React from "react";
import BotCollection from "./BotCollection";
import BotArmy from "./YourBotArmy"

class BotsPage extends React.Component {
  state = {
    bots: [],
    botsArmy: []
  }

  componentDidMount() {
    this.fetchBots()
  }

  fetchBots = () => {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(resp => resp.json())
      .then(bots => this.setState({
        bots: bots
      }))
  }

  handleClicksBotsArmy = (botToAdd) => {
    if (!this.state.botsArmy.includes(botToAdd)) {
      this.setState({
        botsArmy: [...this.state.botsArmy, botToAdd]
      })
    }
  }

  handleClickRemoveBot = (botToRemove) => {
    let newBotsArmy = this.state.botsArmy.filter( bot => bot.id !== botToRemove.id )
    this.setState({
      botsArmy: newBotsArmy
    })
  }

  render() {
    
    const {bots, botsArmy} = this.state
    return (
      <div>
        <BotArmy bots={botsArmy} handleClick={this.handleClickRemoveBot} />
        <BotCollection bots={bots} handleClick={this.handleClicksBotsArmy} />
      </div>
    );
  }

}

export default BotsPage;
