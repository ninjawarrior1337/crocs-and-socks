const commando = require('discord.js-commando')
const randomSubPost = require('../../helpers/randomSubPost')

module.exports = class nesoberi extends commando.Command
{
    constructor(client)
    {
        super(client, {
            description: "Gets a random nesoberi picture",
            name: "nesoberi",
            aliases: ["neso", "nesoberi"],
            group: "weeb",
            memberName: "nesoberi"
        })
    }

    async run(msg)
    {

        // fetchSubreddit.fetchSubreddit("animemes").then((urls) => {
        //     console.log(urls[0].urls)
        //     var randomInt = Math.trunc(Math.random() * urls[0].urls.length)
        //     msg.reply("Here is your fresh animeme \n" + urls[0].urls[randomInt])
        // })
        msg.reply("Nesoberi... \n" + await randomSubPost("nesoberi"))
    }
}