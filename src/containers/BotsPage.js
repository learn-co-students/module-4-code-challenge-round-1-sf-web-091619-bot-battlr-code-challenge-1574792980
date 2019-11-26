import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {
  constructor() {
    super()
    this.state= {
      bots: [],
      botArmy:[]
    }
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(response => response.json())
      .then(allBots => {
        this.setState({
          bots: allBots,
          showBots: allBots
        })
      })
  }

   // handleClick = (selectedBot,event) => {
  //   console.log(event.target)
  //   this.setState({
  //     botArmy: [...this.state.army, selectedBot]
  //   }) 
  // }

  // addBot = () => {
  //   this.setState({
  //     botArmy: 
  //   })
  // }

  render() {
    return (
      <div>
        <YourBotArmy botArmy={this.state.botArmy} addBot={this.addBot}  />
        <BotCollection bots={this.state.bots} />
      </div>
    );
  }

}

export default BotsPage;
