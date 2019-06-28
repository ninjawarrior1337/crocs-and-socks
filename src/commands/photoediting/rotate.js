const commando = require("discord-akairo");
const discord = require('discord.js');
const fs  = require("fs");
const imageDownloader = require("image-downloader");
const imageEffects = require('./../../helpers/imageEffects');


export default class rotate extends commando.Command
{
    constructor()
    {
        super("rotate", {
            description: "Rotates the sent image by a certain amount of degrees",
            aliases: ["rotate"],
            memberName: "rotate",
            name: "rotate",
            group: "photoediting",
            args:[
                {
                    id: "guacInsert",
                    prompt: "Please send an **image url** to use or type some text.",
                    type: "imgorstr"
                },
                {
                    id: "degrees",
                    prompt: "How many degrees do you want to rotate?",
                    type: "number"
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
		await imageEffects.rotate(args.degrees);
		await msg.reply({files: ["processing/output.png"]})
        // fs.unlinkSync("processing/output.png")
    }

}