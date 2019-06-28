import { AkairoModule, Command } from "discord-akairo";

export default class earRape extends Command
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
        let isEarRapeEnabled = this.client.provider.get(msg.guild, "earrape", true)

        if(args.earrape === "get")
        {
            msg.reply(`Ear rape is ${isEarRapeEnabled ? "enabled" : "disabled"} on this server!`)
        }
        else
        {
            if(args.earrape === "off")
            {
                this.client.provider.set(msg.guild, "earrape", false);
                msg.reply("Ear rape on this server has been set to **False**")
            }
            else
            {
                this.client.provider.set(msg.guild, "earrape", true);
                msg.reply("Ear rape on this server has been set to **True**")
            }
        }
    }

}