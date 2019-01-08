const commando = require("discord.js-commando")
const randomSubPost = require("../../helpers/randomSubPost")
const _ = require('lodash')

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

        this.bannedKeywords = [
            "hentai",
            "juul"
        ]
    }

    async run(msg, args)
    {
        if(_.includes(this.bannedKeywords, args.subreddit))
            msg.reply("Sorry, none of that here please.")
        else
            msg.reply(`Here is a post from r/${args.subreddit} \n ${await randomSubPost(args.subreddit)}`)
    }
}