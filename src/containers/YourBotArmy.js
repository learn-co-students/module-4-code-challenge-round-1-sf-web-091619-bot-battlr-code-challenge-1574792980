import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render(){

    const { armyBots, removeBotFromArmy } = this.props

    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {armyBots.map(bot => 
              <BotCard key={bot.id} bot={bot} handleBotClick={removeBotFromArmy} />
              )}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
