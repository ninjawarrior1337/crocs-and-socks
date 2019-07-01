import { Command } from "discord-akairo";
import {VoiceConnection} from 'discord.js'
import path from "path"

export default class soundEffect extends Command
{
    constructor(id, aliases: string[], private fileName: string)
    {
        super(id, {
            aliases: aliases,
            description: `Plays the ${id} audio clip`,
            args: [{
                id: "vc",
                type: "voiceChannel",
                default: "executer"
            }]
        })
    }

    async exec(msg, args)
    {
        let connection: VoiceConnection;

        console.log(args)

        if(args.vc === "executer")
            connection = await msg.member.voiceChannel.join()
        else
        {
            connection = await args.vc.join();
        }

        connection.playFile(path.join(__dirname, "..", "..", "assets", "audio", `${this.fileName}.mp3`), {passes: 5})
    }
}