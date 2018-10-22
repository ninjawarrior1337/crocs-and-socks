const Commando = require('discord.js-commando');
const path = require('path');
const sqlite = require('sqlite');
const secrets = require("./secrets.json")


const client = new Commando.Client({
    owner: "102939281470816256",
    commandPrefix: "%",
    unknownCommandResponse: false,
});

client.registry
    .registerGroups([
       ['music', "Audio related commands"],
       ['weeb', "Weeb related commands"],
       ['fun', "Fun related commands"],
        ['testing', "Bot testing commands"]
    ])
    .registerDefaults()
    .registerCommandsIn(path.join(__dirname, "commands"));

client.setProvider(
    sqlite.open(path.join(__dirname, 'database.sqlite3')).then(db => new Commando.SQLiteProvider(db))
).catch(console.error);

client.login(secrets.token);

client.on("ready", (c) => {
    console.log(`Sucessfully logged in as ${client.user.username}`)
    client.user.setActivity('osu!');
})



process.on("SIGINT", () => {
    client.destroy()
})