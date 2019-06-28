const commando = require('discord-akairo')

module.exports = class getType extends commando.Command
{
    constructor()
    {
        super("gettype", {
            description: "Gets the type of the argument passed in",
            name: "gettype",
            aliases: ["type"],
            group: "testing",
            memberName: "gettype",
            args: [
                {
                    id: "onlyArg",
                    prompt: "Please put something...",
                    type: "message"
                }
            ]
        })
    }

    async exec(msg, args)
    {
        msg.reply(args.onlyArg)
    }
}