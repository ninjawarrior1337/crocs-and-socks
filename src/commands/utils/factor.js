const commando = require("discord-akairo")
const metadelta = require('@metadelta/core')

class factor extends commando.Command
{
    constructor()
    {
        super("factor", {
            description: "Factors the given equation",
            name: "factor",
            group: "utils",
            memberName: "factor",
            aliases: ["factor"],
            args: [{
                id: "eqa",
                type: "string",
                prompt: "What equation do you want to factor"
            }]
        })
    }

    async exec(msg, args)
    {
        msg.reply(metadelta.factor(args.eqa))
    }
}

module.exports = factor