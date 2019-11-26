import React from "react";
import BotCollection from "./BotCollection";
import BotArmy from "./YourBotArmy"
import BotSpec from "../components/BotSpecs"

class BotsPage extends React.Component {
  state = {
    bots: [],
    botsArmy: [],
    clicked: false,
    clickedBot: {}
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

  handleViewClick = (bot) => {
    this.setState({
      clicked: !this.state.clicked,
      clickedBot: bot
    })
  }

  handleClicksBotsArmy = (botToAdd) => {
    if (!this.state.botsArmy.includes(botToAdd)) {
      this.setState({
        botsArmy: [...this.state.botsArmy, botToAdd],
        clicked: !this.state.clicked
      })
    }
  }

  handleClickRemoveBot = (botToRemove) => {
    let newBotsArmy = this.state.botsArmy.filter( bot => bot.id !== botToRemove.id )
    this.setState({
      botsArmy: newBotsArmy,
      clicked: false
    })
  }

  handleGoBack = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    
    const {bots, botsArmy, clickedBot} = this.state
    return (
      <div>
        <BotArmy bots={botsArmy} handleClick={this.handleClickRemoveBot} />
        {!this.state.clicked ? (<BotCollection bots={bots} handleClick={this.handleViewClick} />) : (<BotSpec handleAdd={this.handleClicksBotsArmy} handleRemove={this.handleClickRemoveBot} bot={clickedBot} botsArmy={botsArmy} handleGoBack={this.handleGoBack}/>)}
      </div>
    );
  }

}

export default BotsPage;
