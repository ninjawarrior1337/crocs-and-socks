const commando = require("discord-akairo");
const onelinerjoke = require('one-liner-joke');

module.exports = class joke extends commando.Command
{
    constructor()
    {
        super("joke", {
            "description": "Gets a random joke",
            "aliases": ["joke", "mari"],
        })
    }

    async exec(msg, args)
    {
        if (Math.random() > .9)
            msg.reply("", {files: ["imgs/mari.jpg"]});
        else
            msg.reply(onelinerjoke.getRandomJoke().body, {code: true})
    }
}