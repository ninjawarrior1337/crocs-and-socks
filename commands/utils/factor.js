const commando = require("discord.js-commando")
const metadelta = require('@metadelta/core')

class factor extends commando.Command
{
    constructor(client)
    {
        super(client, {
            description: "Factors the given equation",
            name: "factor",
            group: "utils",
            memberName: "factor",
            aliases: ["factor"],
            args: [{
                key: "eqa",
                type: "string",
                prompt: "What equation do you want to factor"
            }]
        })
    }

    async run(msg, args)
    {
        msg.reply(metadelta.factor(args.eqa))
    }
}

module.exports = factor