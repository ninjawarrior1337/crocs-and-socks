
import {Message} from "discord.js"
import HanamaruCommand from "../../structures/HanamaruCommand";

export default class thot extends HanamaruCommand
{
    constructor(client)
    {
        super(client, {
            name: "thot",
            aliases: ["thot"],
            group: "fun",
            memberName: "adrian",
            description: "Thot lol"
        })
    }

    async exec(msg: Message, args)
    {
        msg.channel.send("you act like a thot on your snapchat story, everytime you are online (which thank god its not all the time) you say reeeee in the chat, you act like a cat in the voice call saying purrrrrrr i hate it so much and theres one thing that i would not like to bring up")
    }
}
