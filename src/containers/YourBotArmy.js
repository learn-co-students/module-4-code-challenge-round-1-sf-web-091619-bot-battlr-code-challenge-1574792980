import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  constructor() {
    super()
    this.state = {
      army: []
    }
  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
          {/* {this.props.addBot} */}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
