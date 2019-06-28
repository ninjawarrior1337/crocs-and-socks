import { VoiceChannel, Channel } from "discord.js";

import * as path from 'path'
import { Command } from "discord-akairo";

export default class miraizura extends Command
{
    constructor()
    {
        super("miraizura", {
            description: "Plays mirai zura in the executer's current channel or the specified channel.",
            name: "miraizura",
            aliases: ["zura", "miraizura", "mirai"],
            memberName: "miraizura",
            group: "weeb",
            args: [{
                id: "vc",
                prompt: "Which voice channel do you want to play zura! in?",
                type: "voiceChannel",
                default: "executer"
            }]
        })
    }

    async exec(msg, args)
    {
        let connection;

        console.log(args)

        if(args.vc === "executer")
            connection = await msg.member.voiceChannel.join()
        else
        {
            connection = await args.vc.join();
        }

        let dispatcher = await connection.playFile(path.join(__dirname, '..', "..", "..", "assets", "audio", "mirai-zura.mp3"), {passes: 5});
    }
}