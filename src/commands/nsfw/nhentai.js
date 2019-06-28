const {Command} = require('discord-akairo')
// const nhentaiApi = require('nhentai-api')
// const {RichEmbed} = require('discord.js')
// const request = require('request-promise-native')
const _ = require('lodash')

export default class nhentai extends Command
{
    constructor()
    {
        super("nhentai", {
            nsfw: true,
            description: "Plays theworld in the executer's current channel or the specified channel.",
            name: "nhentai",
            aliases: ["nhentai", "nh"],
            memberName: "nhentai",
            group: "weeb",
            args: [{
                id: "bookId",
                prompt: "Which book id?",
                type: "integer",
                default: () => {return _.random(255225)}
            }]
        })
    }

    // assembleMessage(book)
    // {
    //     let msg = new RichEmbed()
    //     let desc = []
    //     msg.setColor(0xEB2754);
    //     msg.setTitle(book.title.english)
    //     msg.setImage(book.thumbnail)
    //     msg.setURL(`https://nhentai.net/g/${book.id}`)

    //     for(let tag of book.tags)
    //         desc.push(tag.name)

    //     msg.setDescription(desc.join("\n"))
        
    //     return msg
    // }

    async exec(msg, args)
    {
        // let nhrequest = await request(new nhentaiApi().bookDetails(args.bookId))
        // let bookJson = JSON.parse(nhrequest)
        msg.reply(`https://nhentai.net/g/${args.bookId}`)
    }
}