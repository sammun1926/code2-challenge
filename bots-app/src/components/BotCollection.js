import React, { useState, useEffect } from 'react';

function BotCollection() {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch('/db.json')
      .then(response => response.json())
      .then(data => setBots(data.bots))
      .catch(error => console.log(error));
  }, []);

  function enlistBot(id) {
    // TODO: Implement this function to enlist a bot
  }

  return (
    <div>
      <h2>Bot Collection</h2>
      <ul>
        {bots.map(bot => (
          <li key={bot.id}>
            <h3>{bot.name}</h3>
            <p>{bot.description}</p>
            <img src={bot.image} alt={bot.name} />
            <button disabled={bot.enlisted} onClick={() => enlistBot(bot.id)}>
              {bot.enlisted ? 'Enlisted' : 'Enlist'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BotCollection;
