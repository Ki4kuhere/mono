// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
  client.user.setActivity('You need help? DM me');
});


// Login to Discord with your client's token
client.login("OTY3NDAzODAzNjQ3Mjk5NTk0.YmPzAA.wRHfs2qZbLOMJ4l1B0J4jUQjn18");