const commando = require("discord-akairo")
const metadelta = require('@metadelta/core')

class findroots extends commando.Command
{
    constructor()
    {
        super("findroots", {
            description: "Finds the roots of the given equation",
            name: "roots",
            group: "utils",
            memberName: "findroots",
            aliases: ["roots", "findroots"],
            args: [{
                id: "eqa",
                type: "string",
                prompt: "What equation do you want to find the roots of"
            }]
        })
    }

    async exec(msg, args)
    {
        msg.reply(metadelta.zeroes(args.eqa).join(", "))
    }
}

module.exports = findroots