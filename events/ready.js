const client = require("../index");

client.on('ready', () => {
    console.log('Bot is online')

    setInterval(() =>{
    client.user.setActivity(`!help`, {type:"WATCHING"})
    }, 180000);

})
