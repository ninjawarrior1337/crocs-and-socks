const commando = require("discord-akairo")
import getRandomPost from "./../../helpers/randomSubPost"
const _ = require('lodash')

export default class randomPost extends commando.Command
{
    constructor()
    {
        super("randomPost", {
            "description": "Gets a random post from the speicified subreddit",
            "aliases": ["r", "reddit"],
            "name": "reddit",
            "memberName": "reddit",
            "group": "fun",
            "args": [{
                "id": "subreddit",
                "prompt": "Which subreddit",
                "type": "string",
                "match": "rest"
            }]
        })

        this.bannedKeywords = [
            "hentai",
            "juul"
        ]
    }

    async exec(msg, args)
    {
        if(_.includes(this.bannedKeywords, args.subreddit))
            msg.reply("Sorry, none of that here please.")
        else
            msg.reply(`Here is a post from r/${args.subreddit} \n ${await getRandomPost(args.subreddit)}`)
    }
}