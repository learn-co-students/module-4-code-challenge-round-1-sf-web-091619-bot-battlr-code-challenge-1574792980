import React from "react";
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    allBots: [],
    favs: []
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

  addToFavs = (bot) => {
    if (!this.state.favs.map(fav => fav.id).includes(bot.id)) {
      const newFavs = [...this.state.favs, bot]
      this.setState({ favs: newFavs})
    }
  } 

  removeBot = (bot) => {
    const newFavs = this.state.favs.filter(fav => fav.id !== bot.id)
    this.setState({ favs: newFavs })
  }

  render() {
    return (
      <div>
        <YourBotArmy favs={this.state.favs} removeBot={this.removeBot} />
        <BotCollection allBots={this.state.allBots} addToFavs={this.addToFavs} />
      </div>
    );
  }

}

export default BotsPage;
