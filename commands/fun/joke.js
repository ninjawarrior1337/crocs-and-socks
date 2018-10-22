const commando = require("discord.js-commando");
const onelinerjoke = require('one-liner-joke');

module.exports = class joke extends commando.Command
{
    constructor(client)
    {
        super(client, {
            "description": "Gets a random joke",
            "aliases": ["joke", "mari"],
            "name": "joke",
            "memberName": "joke",
            "group": "fun"
        })
    }

    async run(msg, args)
    {
        if (Math.random() > .9)
            msg.reply("", {files: ["imgs/mari.jpg"]});
        else
            msg.reply(onelinerjoke.getRandomJoke().body, {code: true})
    }
}