// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
  client.user.setActivity('You need help? DM me');
});

const token = process.env['token']
// Login to Discord with your client's token
client.login(token);