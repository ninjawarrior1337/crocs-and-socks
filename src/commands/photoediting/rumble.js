const discord = require('discord.js');
const fs  = require("fs");
const imageDownloader = require("image-downloader");
const imageEffects = require('./../../helpers/imageEffects');
import {Command} from 'discord-akairo'


class menacing extends Command
{
    constructor()
    {
        super("menacing", {
            description: "Makes the sent image menacing",
            aliases: ["rumble", "menacing"],
            memberName: "menacing",
            name: "menacing",
            group: "photoediting",
            args:[
                {
                    id: "guacInsert",
                    prompt: "Please send an **image url** to use or type some text.",
                    type: "imgorstr"
                }
            ]
        });
    }

    async exec(msg, args)
    {
        if(!fs.existsSync("processing"))
        {
            await fs.mkdirSync("processing");
            console.log("Processing folder created");
        }

        console.log(args.guacInsert);

        await imageDownloader.image({url: args.guacInsert, dest: "processing/input.png"});
        await imageEffects.rumble();
        await msg.reply({files: ["processing/output.jpg"]})
        // fs.unlinkSync("processing/output.png")
    }

}

module.exports = menacing;