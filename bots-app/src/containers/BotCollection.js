import React from 'react'
import BotCard from "../components/BotCard"

export default function BotCollection({ botCollection, action, removeCard }) {
  const displayBotCards = botCollection.map(bot => {
    return <BotCard key= {bot.id} bot={bot} action={action} removeCard={removeCard} />
  })

  return (
    <div className="ui four column grid">
      <div className="row">
        {displayBotCards}
        Ben's Bot Army are over . There are no more bots to collect.
      </div>
    </div>
  )
}
