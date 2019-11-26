import React from "react";
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    allBots: [],
    favs: [],
    showDets: false,
    bot: {}
  }
  componentDidMount = () => {
    this.fetchBots()
  }
  
  fetchBots = () => {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(res => res.json())
    .then(data => {
      this.setState({ allBots: data})
    })
  }

  showBotDets = (bot) => {
    this.setState({ bot })
    this.setState({ showDets: true })
    
  } 

  addBotFav = (bot) => {
    if (!this.state.favs.map(fav => fav.id).includes(bot.id)) {
      const newFavs = [...this.state.favs, bot]
      this.setState({ favs: newFavs})
    }
  }

  removeBot = (bot) => {
    const newFavs = this.state.favs.filter(fav => fav.id !== bot.id)
    this.setState({ favs: newFavs })
  }

  goBack = () => {
    this.setState({ showDets: false })
  }

  render() {
    return (
      <div>
        <YourBotArmy favs={this.state.favs} removeBot={this.removeBot} />
        {this.state.showDets ? (<BotSpecs bot={this.state.bot} goBack={this.goBack} addBotFav={this.addBotFav} />) : (<BotCollection allBots={this.state.allBots} showBotDets={this.showBotDets} />)}
      </div>
    );
  }

}

export default BotsPage;
