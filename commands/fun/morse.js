const commando = require('discord.js-commando');
const morseCode = require('morjs');

class morse extends commando.Command
{
    constructor(client)
    {
        super(client, {
            description: "Converts a string to/from morse code",
            name: "morse",
            group: "fun",
            memberName: "morse",
            args: [{
                key: "inputString",
                prompt: "What do you want to convert to/from morse code?",
                type: "string"
            }]
        })
    }

    async run(msg, args)
    {
        if(args.inputString.match(/[a-z]/gm))
        {
            msg.reply(morseCode.encode(args.inputString, {mode: 'simple'}))
        }
        else
        {
            msg.reply(morseCode.decode(args.inputString, {mode: 'simple'}))
        }
    }
}

module.exports = morse;