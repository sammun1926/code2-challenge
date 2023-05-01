# code2-challenge
Project Title:
Bot Battlr

Installation:
created an app using the npx create-react-app test-app

Author:
SAM MAINA

License:
MIT license



The code provided includes a React application that displays a collection of bots and allows the user to enlist them into their army.

The BotCollection component maps over an array of bots and renders a BotCard component for each bot. The BotCard component displays information about the bot and includes buttons to enlist or remove the bot from the army. The BotSpecs component displays detailed information about a specific bot, and includes buttons to enlist the bot or go back to the collection view. The BotArmy component displays a list of the user's enlisted bots.

The BotsPage component is the top-level component that manages the state of the application. When the component mounts, it fetches the bot data from a JSON API and sets the botCollection state. The component also manages the botArmy state, which is an array of enlisted bots. When the user enlists or removes a bot, the botArmy state is updated accordingly.