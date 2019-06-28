const {Command} = require("discord-akairo")

class avatarurl extends Command
{
    constructor()
    {
        super("avatarurl", {
            description: "Gets the avatar url of the specified user.",
            name: "avatar_url",
            group: "utils",
            memberName: "avatar_url",
            aliases: ["avatar", "avatar_url"],
            args: [{
                id: "user",
                type: "user",
                prompt: "Who is the user you want the avatar of?"
            }]
        })
    }

    async exec(msg, args)
    {
        msg.reply(args.user.avatarURL)
    }
}

module.exports = avatarurl