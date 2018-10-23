const {Command} = require("discord.js-commando")

class avatarurl extends Command
{
    constructor(client)
    {
        super(client, {
            description: "Gets the avatar url of the specified user.",
            name: "avatar_url",
            group: "utils",
            memberName: "avatar_url",
            aliases: ["avatar", "avatar_url"],
            args: [{
                key: "user",
                type: "user",
                prompt: "Who is the user you want the avatar of?"
            }]
        })
    }

    async run(msg, args)
    {
        msg.reply(args.user.avatarURL)
    }
}

module.exports = avatarurl