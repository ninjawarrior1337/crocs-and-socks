const commando = require("discord.js-commando")
const randomSubPost = require("../../helpers/randomSubPost")

module.exports = class randomPost extends commando.Command
{
    constructor(client)
    {
        super(client, {
            "description": "Gets a random post from the speicified subreddit",
            "aliases": ["r", "reddit"],
            "name": "reddit",
            "memberName": "reddit",
            "group": "fun",
            "args": [{
                "key": "subreddit",
                "prompt": "What subreddit?",
                "type": "string"
            }]
        })
    }

    async run(msg, args)
    {
        msg.reply(`Here is a post from r/${args.subreddit} \n ${await randomSubPost(args.subreddit)}`)
    }
}