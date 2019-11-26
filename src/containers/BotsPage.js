import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'

class BotsPage extends React.Component {
  constructor(){
    super()

    this.state = {
      bots: [],
      armyBots: [], 
      clicked: false,
      chosenBot: {}
    }

  }

  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(resp => resp.json())
    .then(bots => this.setState({bots: bots}) )
  }


  showSpec = (bot) => {
    this.setState({ clicked: !this.state.clicked, chosenBot: bot })
  }

  handleGoBack = () =>{
    this.setState({ clicked: !this.state.clicked})
  }

  handleEnlist = (bot) => {
      this.setState ({
        armyBots: [...this.state.armyBots, bot],
        clicked: !this.state.clicked
      })
    }

  // addArmy = (bot) => {
  //   this.setState ({
  //     armyBots: [...this.state.armyBots, bot]
  //   })
  // }

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

      {(this.state.clicked) ? (
        <BotSpecs bot={this.state.chosenBot} handleGoBack={this.handleGoBack} handleEnlist={this.handleEnlist}/>
      )
      : (
        <BotCollection bots={this.state.bots}  showSpec={this.showSpec}/>
      )
      }
      </div>
    );
  }

}

export default BotsPage;
