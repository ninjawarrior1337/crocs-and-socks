import { Command } from "discord-akairo";
import path from 'path'

export default class theworld extends Command
{
    constructor()
    {
        super("theworld", {
            description: "Plays theworld in the executer's current channel or the specified channel.",
            args: [{
                id: "vc",
                type: "voiceChannel",
                default: "executer"
            }],
            aliases: ["theworld", "dio"]
        })
    }

    async exec(msg, args)
    {
        let connection;

        if(args.vc === "executer")
            if(msg.member !== null)
                connection = await msg.member.voiceChannel.join();
            else
            {
                msg.channel.send({files: [path.join(__dirname, '..', "..", "..", "assets", "audio", "theworld.mp3")]});
                return
            }
        else
        {
            connection = await args.vc.join()
        }

        let dispatcher = await connection.playFile(path.join(__dirname, '..', "..", "..", "assets", "audio", "theworld.mp3"), {passes: 5});
    }
}