import React from "react";
import Monster from "monsters.json"
​
function Combat() {
  return (
    {
    this.state.monsters.map(monster => {
     return <ImageCard
      selectCard={this.selectCard}
      image={card.image}
      name={card.name}
      id={card.id}
     />
    })}
  )
}
​
export default Combat;