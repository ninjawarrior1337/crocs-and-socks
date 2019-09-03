import { CommandoClient, Command, CommandMessage } from "discord-akairo";

import randomSubPost from '../../helpers/randomSubPost'

export default class sagiri extends Command
{
    constructor()
    {
        super("sagiri", {
            description: "Gets a random sagiri picture",
            name: "sagiri",
            aliases: ["sagiri", "otls"],
            group: "weeb",
            memberName: "sagiri"
        })
    }

    async exec(msg)
    {

        // fetchSubreddit.fetchSubreddit("animemes").then((urls) => {
        //     console.log(urls[0].urls)
        //     var randomInt = Math.trunc(Math.random() * urls[0].urls.length)
        //     msg.reply("Here is your fresh animeme \n" + urls[0].urls[randomInt])
        // })
        return msg.reply("Sagiri... \n" + await randomSubPost("onetruelittlesister"))
    }
}