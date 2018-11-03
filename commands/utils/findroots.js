const commando = require("discord.js-commando")
const metadelta = require('@metadelta/core')

class findroots extends commando.Command
{
    constructor(client)
    {
        super(client, {
            description: "Finds the roots of the given equation",
            name: "roots",
            group: "utils",
            memberName: "findroots",
            aliases: ["roots", "findroots"],
            args: [{
                key: "eqa",
                type: "string",
                prompt: "What equation do you want to find the roots of"
            }]
        })
    }

    async run(msg, args)
    {
        msg.reply(metadelta.zeroes(args.eqa).join(", "))
    }
}

module.exports = findroots