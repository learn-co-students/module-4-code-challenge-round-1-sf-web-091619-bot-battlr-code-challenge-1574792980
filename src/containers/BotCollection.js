import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){
	const { bots, addToArmy } = this.props
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {/*...and here..*/}
			  {bots.length > 0 && bots.map(bot => 
				  <BotCard bot={bot} addToArmy={addToArmy}/>
			  )}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
