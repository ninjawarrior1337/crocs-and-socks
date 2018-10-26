const commando = require("discord.js-commando");
const discord = require('discord.js');

class guacamole extends commando.Command
{
    constructor(client)
    {
        super(client, {
            description: "Makes guacamole with special stuff added",
            aliases: ["guacamole", "guac"],
            memberName: "guacamole",
            name: "guacamole",
            group: "photoediting",
            args:[
                {
                    key: "guacInsert",
                    prompt: "Please send an **image url** to use or type some text.",
                    type: "imageorstring"
                }
            ]
        })
    }

    async run(msg, args)
    {
        msg.reply(args.guacInsert)
    }

}

module.exports = guacamole