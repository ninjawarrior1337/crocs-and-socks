var commando = require('discord.js-commando');

class setAvatar extends commando.Command
{
    constructor(client) {
        super(client, {
            description: "Set the bot's avatar",
            aliases: ["setavatar", "sa"],
            memberName: "setavatar",
            name: "setavatar",
            group: "settings",
            args: [
                {
                    key: "url",
                    prompt: "Please attach an image or a string",
                    type: "imageorstring"
                }
            ],
            ownerOnly: true
        });
    }

    async run(msg, args)
    {
        await this.client.user.setAvatar(args.url)
        msg.reply("Avatar Changed!")
    }
}

module.exports = setAvatar