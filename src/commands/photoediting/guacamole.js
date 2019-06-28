const commando = require("discord-akairo");
const discord = require('discord.js');
const fs  = require("fs");
const request = require("request");
const sharp = require('jimp');


class guacamole extends commando.Command
{
    constructor()
    {
        super("guacamole", {
            description: "Makes guacamole with special stuff added",
            aliases: ["guacamole", "guac"],
            memberName: "guacamole",
            name: "guacamole",
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
    		await fs.mkdir("processing");
     		console.log("Processing folder created");
		}
		
		console.log(args.guacInsert);
		await request(args.guacInsert).pipe(fs.createWriteStream("processing/input.png"));
		await sharp("processing/input.png")
			.resize(200)
			.output("processing/output.png")

    }

}

module.exports = guacamole;