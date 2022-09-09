const client = require("../index");

client.on('ready', () => {
    console.log('Bot is online')
    client.user.setActivity(`The High Seas`, {type:"WATCHING"})
})
