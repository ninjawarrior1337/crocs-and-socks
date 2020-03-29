import {Attachment} from "discord.js";
import HanamaruClient from "../structures/client";
import getAnime from "./AnimeSearch";

export default function SetupMessageListener(client: HanamaruClient) {
    client.on("message", async (message) => {
        //Anime Listener
        if (message.author === client.user) return;
        await getAnime(message);
        //Ping Listener
        if(message.mentions.members.has("102939281470816256") && message.author.bot && message.member.id !== client.user.id)
        {
            await message.delete()
        }

        //WHAT?!?!?!?! listener
        if(message.content.match(/^what[?!./]*$/gmi))
        {
            if(client.provider.get(message.guild.id, "dio", true)) {
                await message.channel.send(new Attachment("https://cdn.discordapp.com/attachments/407230022743621644/604427093287370828/Screenshot_419.png"))
            }
        }
    });
}
