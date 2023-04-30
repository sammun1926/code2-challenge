import React, { useState } from 'react';

function YourBotArmy() {
  const [army, setArmy] = useState([]);

  function releaseBot(id) {
    // TODO: Implement this function to release a bot
  }

  return (
    <div>
      <h2>Your Bot Army</h2>
      <ul>
        {army.map(bot => (
          <li key={bot.id}>
            <h3>{bot.name}</h3>
            <p>{bot.description}</p>
            <img src={bot.image} alt={bot.name} />
            <button onClick={() => releaseBot(bot.id)}>Release</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default YourBotArmy;
