import { Command, CommandoClient, CommandMessage } from "discord-akairo";

import getRandomPost from "./../../helpers/randomSubPost"

export default class lovelive extends Command
{
    constructor()
    {
        super("lovelive", {
            description: "Gets a random love live",
            name: "lovelive",
            aliases: ["llsip", "ll", "llsif"],
            group: "weeb",
            memberName: "lovelive"
        })
    }

    async exec(msg)
    {

        // fetchSubreddit.fetchSubreddit("animemes").then((urls) => {
        //     console.log(urls[0].urls)
        //     var randomInt = Math.trunc(Math.random() * urls[0].urls.length)
        //     msg.reply("Here is your fresh animeme \n" + urls[0].urls[randomInt])
        // })
        return msg.reply("Love Live... \n" + await getRandomPost("lovelive"))
    }
}