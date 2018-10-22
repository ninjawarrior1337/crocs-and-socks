const commando = require('discord.js-commando')
const randomSubPost = require('../../helpers/randomSubPost')

module.exports = class sagiri extends commando.Command
{
    constructor(client)
    {
        super(client, {
            description: "Gets a random sagiri picture",
            name: "sagiri",
            aliases: ["sagiri", "otls"],
            group: "weeb",
            memberName: "sagiri"
        })
    }

    async run(msg)
    {

        // fetchSubreddit.fetchSubreddit("animemes").then((urls) => {
        //     console.log(urls[0].urls)
        //     var randomInt = Math.trunc(Math.random() * urls[0].urls.length)
        //     msg.reply("Here is your fresh animeme \n" + urls[0].urls[randomInt])
        // })
        msg.reply("Sagiri... \n" + await randomSubPost("onetruelittlesister"))
    }
}