const commando = require('discord.js-commando')

module.exports = class getType extends commando.Command
{
    constructor(client)
    {
        super(client, {
            description: "Gets the type of the argument passed in",
            name: "gettype",
            aliases: ["type"],
            group: "testing",
            memberName: "gettype",
            args: [
                {
                    key: "onlyArg",
                    prompt: "Please put something...",
                    type: "message"
                }
            ]
        })
    }

    async run(msg, args)
    {
        msg.reply(args.onlyArg)
    }
}