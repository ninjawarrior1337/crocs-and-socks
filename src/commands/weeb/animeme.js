import {getRandomPost} from '../../helpers/randomSubPost'
import { Command } from 'discord-akairo';

export default class animeme extends Command
{
    constructor()
    {
        super("animeme", {
            description: "Gets a random animeme",
            name: "animeme",
            aliases: ["animeme", "weebmeme", "trashmeme"],
            group: "weeb",
            memberName: "animeme"
        })
    }

    async exec(msg)
    {
        
        // fetchSubreddit.fetchSubreddit("animemes").then((urls) => {
        //     console.log(urls[0].urls)
        //     var randomInt = Math.trunc(Math.random() * urls[0].urls.length)
        //     msg.reply("Here is your fresh animeme \n" + urls[0].urls[randomInt])
        // })
        return msg.reply("Here is your fresh animeme \n" + await getRandomPost("animemes"))
    }
}