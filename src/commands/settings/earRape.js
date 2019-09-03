import { AkairoModule, Command } from "discord-akairo";
import HanamaruCommand from "../../structures/Command";

export default class earRape extends HanamaruCommand
{
    constructor() {
        super("earrape", {
            aliases: ["earrape"],
            description: "Turn ear rape on or off for the current server",
            guildOnly: true,
            args: [{
                id: "earrape",
                type: "string",
                prompt: "Do you want to turn ear rape on or off?",
                oneOf: ["off", "on", "get"],
                default: "get"
            }]
        });
    }

    async exec(msg, args)
    {
        let isEarRapeEnabled = this.client.provider.get(msg.guild.id, "earrape", true)

        if(args.earrape === "get")
        {
            await msg.reply(`Ear rape is ${isEarRapeEnabled ? "enabled" : "disabled"} on this server!`)
        }
        else
        {
            if(args.earrape === "off")
            {
                this.client.provider.set(msg.guild.id, "earrape", false);
                await msg.reply("Ear rape on this server has been set to **False**")
            }
            else
            {
                this.client.provider.set(msg.guild.id, "earrape", true);
                await msg.reply("Ear rape on this server has been set to **True**")
            }
        }
    }

}