var commando = require('discord-akairo');

class setAvatar extends commando.Command
{
    constructor() {
        super("setavatar", {
            description: "Set the bot's avatar",
            aliases: ["setavatar", "sa"],
            memberName: "setavatar",
            name: "setavatar",
            group: "settings",
            args: [
                {
                    id: "url",
                    prompt: "Please attach an image or a string",
                    type: "imgorstr"
                }
            ],
            ownerOnly: true
        });
    }

    async exec(msg, args)
    {
        await this.client.user.setAvatar(args.url)
        await msg.reply("Avatar Changed!")
    }
}

module.exports = setAvatar