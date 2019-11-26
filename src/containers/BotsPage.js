import React from "react";
import YourBotArmy from './YourBotArmy'
import BotCollection from './BotCollection'

class BotsPage extends React.Component {
  //start here with your code for step one
  constructor() {
    super();
    this.state = {
      bots: [],
      botarmy: []
    }
  }
  getBots() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(resp => resp.json())
      .then(bots => {
        this.setState({bots})
      })
  }
  componentDidMount() {
    this.getBots();
  }

  removeBotFromArmy(bot) {
    let index = this.state.botarmy.indexOf(bot)
    let array = this.state.botarmy
    array.splice(index, 1)
    this.setState({botarmy: array})
  }

  addToArmy = (bot) => {
    const { botarmy } = this.state
    botarmy.includes(bot) ? 
      this.removeBotFromArmy(bot) :
      this.setState({botarmy: [...botarmy, bot]})
  }

  render() {
    const { bots, botarmy } = this.state
    return (
      <div>
        {/* put your components here */}
        < YourBotArmy botarmy={botarmy}/>
        < BotCollection bots={bots} addToArmy={this.addToArmy }/>
      </div>
    );
  }

}

export default BotsPage;
