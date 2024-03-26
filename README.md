# RookieBot

RookieBot is a Discord bot developed using Discord.js, providing various commands to manage and moderate your Discord server.

## Features

- **Bilgi**: Provides general information about the available commands.
- **dmduyuru**: Sends a direct message to everyone on the server to make an announcement.
- **geçici-sustur**: Temporarily mutes users in the server.
- **gir**: Allows the bot to join the voice channel you're currently in.
- **herkese-rol-ver**: Assigns a specified role to everyone on the server.
- **herkesten-rol-al**: Removes a specified role from everyone on the server.
- **reboot**: Restarts the bot.
- **rol-oluştur**: Creates a new role with the specified name.
- **rol-ver**: Assigns a specified role to a specific user.
- **sa-as**: A toggleable command that responds to greetings in text channels. When activated, if someone greets in a text channel, the bot will respond with a greeting.
- **sil**: Deletes the specified number of messages.
- **çek**: Moves the mentioned user to the voice channel you're currently in.

## Usage

To use RookieBot in your Discord server, follow these steps:

1. Invite RookieBot to your Discord server using the provided invite link.
2. Set up necessary permissions for RookieBot to perform actions like sending messages, managing roles, and joining voice channels.
3. Use the available commands prefixed with a designated prefix (default prefix: '!') to manage your server and interact with RookieBot.

## Installation

To host RookieBot yourself or contribute to the project, follow these steps:

1. Clone the repository to your local machine.
2. Install Node.js and npm if you haven't already.
3. Navigate to the project directory in your terminal.
4. Install the required dependencies by running `npm install`.
5. Rename or create a `.env` file and add your Discord bot token and other configurations (if any).
6. Start the bot by running `node index.js` or `npm start`.
