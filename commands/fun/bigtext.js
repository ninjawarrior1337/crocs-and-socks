var fs = require('fs');
var commando = require('discord.js-commando')
var text2png = require('text2png');

class bigtext extends commando.Command
{
    constructor(client) {
        super(client, {
            description: "Makes big text",
            aliases: ["bigtext", "text"],
            memberName: "bigtext",
            name: "bigtext",
            group: "fun",
            args: [
                {
                    key: "text",
                    prompt: "What text do you want?",
                    type: "string"
                }
            ]
        });
    }

    async run(msg, args)
    {
        msg.reply({files: [text2png(args.text, {font: '80px Noto Sans', backgroundColor: 'linen', padding: 20, color: 'teal'})]})
    }
}

module.exports = bigtext