import { CommandMessage, Command, CommandoClient } from "discord-akairo";

const fs = require("fs")
const path = require('path')

export default class padoru extends Command
{
    constructor()
    {
        super("padoru", {
            name: "padoru",
            aliases: ['padoru'],
            group: "weeb",
            memberName: "padoru",
            description: "Padoru Padoru Padoru",
        })
    }


    randomImg()
    {
		var files = fs.readdirSync(path.join(__dirname, '..', "..", "..", "assets", "imgs", "padoru"))
        let imgDirectory = path.join(__dirname, '..', "..", "..", "assets", "imgs", "padoru")
        let chosenFile = files[Math.floor(Math.random() * files.length)]

        if (!fs.existsSync(imgDirectory + "/lastChosen.txt"))
        {
            fs.writeFileSync(imgDirectory + "/lastChosen.txt")
        }

        if(chosenFile == fs.readFileSync(imgDirectory + "/lastChosen.txt"))
        {
            // console.log("DETECTED")
            return this.randomImg()
        }
        else if(path.extname(chosenFile) !== ".png")
        {
            return this.randomImg()
        }
        else
        {
            fs.writeFileSync(imgDirectory + "/lastChosen.txt", chosenFile)
            return path.join(imgDirectory, chosenFile)
        }
    }

    async exec(msg)
    {
        return msg.reply("PADORU PADORU!",{files: [this.randomImg()]})
    }
}