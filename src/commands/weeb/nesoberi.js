import { CommandMessage, CommandoClient, Command } from "discord-akairo";

const randomSubPost = require('../../helpers/randomSubPost')

export default class nesoberi extends Command
{
    constructor()
    {
        super("nesoberi", {
            description: "Gets a random nesoberi picture",
            name: "nesoberi",
            aliases: ["neso", "nesoberi"],
            group: "weeb",
            memberName: "nesoberi"
        })
    }

    async exec(msg)
    {

        // fetchSubreddit.fetchSubreddit("animemes").then((urls) => {
        //     console.log(urls[0].urls)
        //     var randomInt = Math.trunc(Math.random() * urls[0].urls.length)
        //     msg.reply("Here is your fresh animeme \n" + urls[0].urls[randomInt])
        // })
        return msg.reply("Nesoberi... \n" + await randomSubPost("nesoberi"))
    }
}