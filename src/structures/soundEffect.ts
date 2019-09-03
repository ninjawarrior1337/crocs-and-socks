import { Command } from "discord-akairo";
import {VoiceConnection} from 'discord.js'
import path from "path"
import HanamaruCommand from "./Command";
import _ from "underscore";

export default class soundEffect extends HanamaruCommand
{
    protected folderPath = [__dirname, "..", "..", "assets", "audio"];
    constructor(id, aliases: string[], protected fileName: string | string[])
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
        let fileSelected;

        console.log(args)

        if(args.vc === "executer")
        {
            if (!msg.member.voiceChannel)
            {
                await msg.reply("You must be in or specify a VC in order to use is command")
                return;
            }
            else
            {
                connection = await msg.member.voiceChannel.join()
            }
        }
        else
        {
            connection = await args.vc.join();
        }

        if(typeof this.fileName !== "string")
            fileSelected = _.sample(this.fileName);
        else
            fileSelected = this.fileName;

        connection.playFile(path.join(...this.folderPath, `${fileSelected}`), {passes: 5})
    }
}