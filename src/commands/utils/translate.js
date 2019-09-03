const commando = require('discord-akairo');
const translateApi = require('@k3rn31p4nic/google-translate-api');


export default class translate extends commando.Command
{
    constructor()
    {
        super("translate", {
            name: "translate",
            aliases: ['translate', 'trans', 'tla'],
            group: "utils",
            memberName: "translate",
            description: "Translate a string to another language",
            args: [
                {
                    id: "textInput",
                    type: "string",
                    prompt: {
                        start: "Please input the string to be translated"
                    },
                    match: "rest"
                },
                {
                    id: "outputLang",
                    type: "string",
                    prompt: {start: "Please enter the language you want to translate to", optional: true},
                    default: "en",
                    prefix: "lang=",
                    match: "prefix"
                }
            ]
        })
    }

    async exec(msg, args)
    {
        try
        {
            let res = await translateApi(args.textInput, {to: args.outputLang});
            msg.reply(res.text)
        }
        catch (e) {
            console.error(e);
            msg.reply(`ERROR: ${e.message}`)
        }
    }
}
