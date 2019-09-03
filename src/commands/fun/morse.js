const commando = require('discord-akairo');
const morseCode = require('morjs');

export default class morse extends commando.Command
{
    constructor()
    {
        super("morse", {
            description: "Converts a string to/from morse code",
            name: "morse",
            aliases: ["morse"],
            args: [{
                id: "inputString",
                prompt: "What do you want to convert to/from morse code?",
                type: "string"
            }]
        })
    }

    async exec(msg, args)
    {
        if(args.inputString.match(/[a-z]/gm))
        {
            await msg.reply(morseCode.encode(args.inputString, {mode: 'simple'}))
        }
        else
        {
            await msg.reply(morseCode.decode(args.inputString, {mode: 'simple'}))
        }
    }
}