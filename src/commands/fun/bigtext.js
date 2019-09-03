var fs = require('fs');
import {Command} from 'discord-akairo'
var text2png = require('text2png');

export default class bigtext extends Command
{
    constructor() {
        super("bigtext", {
            description: "Makes big text",
            aliases: ["bigtext", "text"],
            args: [
                {
                    id: "text",
                    prompt: "What text do you want?",
                    type: "string",
                    match: "rest"
                }
            ]
        });
    }

    async exec(msg, args)
    {
        msg.reply({files: [text2png(args.text, {font: '80px Noto Sans', backgroundColor: 'linen', padding: 20, color: 'teal'})]})
    }
}