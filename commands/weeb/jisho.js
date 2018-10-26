const commando = require("discord.js-commando");
const jishoApiE = require('unofficial-jisho-api');
const {RichEmbed} = require('discord.js');
const hepburn = require('hepburn');

const jishoApi = new jishoApiE();

class jisho extends commando.Command
{
    constructor(client)
    {
        super(client,{
            description: "Looks up the given string in Jisho.",
            memberName: "jisho",
            name: "jisho",
            group: "weeb",
            args:
                [
                    {
                        key: "query",
                        prompt: "What do you want to search for?",
                        type: "string"
                    }
                ]
        })
    }

    async run(msg, args)
    {
        var result = await jishoApi.searchForPhrase(args.query)

        var data = result.data[0]

        if(data === undefined)
        {
            msg.reply("Could not find anything.")
            return
        }

        var embed = new RichEmbed()

        embed.setColor(0xff0000)

        embed.setTitle(data.japanese[0].word ? data.japanese[0].word : data.japanese[0].reading)

        embed.addField("Reading", `${data.japanese[0].reading} (${hepburn.fromKana(data.japanese[0].reading)})`, true)

        embed.addField("Meaning", data.senses[0].english_definitions[0])

        await msg.reply(embed)
    }
}

module.exports = jisho