const {Command} = require("discord.js-commando")

class patrick extends Command
{
    constructor(client)
    {
        super(client, {
            description: "Expand patrick",
            name: "patrick",
            memberName: "patrick",
            group: "fun",
            args: [{
                key: "neckLength",
                prompt: "How long do you want the neck",
                type: "integer",
                min: -3,
                max: 3,
                default: 0
            }]
        })
    }

    async run(msg, args) {
        if (args.neckLength < 0)
        {
            await msg.channel.sendFile("imgs/patrick/0r.jpg")
            for(let i=0; i>args.neckLength; i--)
            {
                await msg.channel.sendFile("imgs/patrick/1r.jpg")
            }
            await msg.channel.sendFile("imgs/patrick/2r.jpg")
        }
        else if(args.neckLength > 0)
        {
            await msg.channel.sendFile("imgs/patrick/0.jpg")
            for(let i=0; i<args.neckLength; i++)
            {
                await msg.channel.sendFile("imgs/patrick/1.jpg")
            }
            await msg.channel.sendFile("imgs/patrick/2.jpg")
        }
        else
        {
            await msg.channel.sendFile("imgs/patrick/0.jpg")
            await msg.channel.sendFile("imgs/patrick/2.jpg")
        }
    }
}

module.exports = patrick