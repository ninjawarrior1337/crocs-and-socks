import * as path from 'path'
import imageOrUrl from './customTypes/imageOrString';
import HanamaruClient from './structures/client';
import {Attachment} from "discord.js";

//Begin actual bot config

require('dotenv').config();

if(!process.env.TOKEN)
{
  console.log('Please provide a bot token.')
  process.exit()
}

const client = new HanamaruClient(
  {
    ownerID: process.env.OWNER,
    prefix: process.env.PREFIX ? process.env.PREFIX : "?",
    commandUtil: true,
    handleEdits: true,
    commandDirectory: path.join(__dirname, "commands"),
    automateCategories: true
  }, 
  {
    disableEveryone: true
  }
);

client.build();

client.commandHandler.resolver.addType("imgorstr", imageOrUrl)

client.login(process.env.TOKEN);

client.on("ready", () => {
  console.log(`Sucessfully logged in as ${client.user.username}`);
  client.user.setActivity("Aqours Songs", {type: "LISTENING"});
});

client.on("error", e => console.error(e));
client.on("warn", e => console.warn(e));

// Anime {} Function
async function getAnime(msg) {
  const animeRegex = new RegExp("{(?<show>.+?)}", "gm");

  if (msg.author === client.user) return;

  console.log(msg.content.match(animeRegex));
}
// の/ノ listener
client.on("messageReactionAdd", (messageReaction, user) => {
  if (messageReaction.message.guild === undefined) return;

  if (
    messageReaction.emoji.name === "noh" ||
    messageReaction.emoji.name === "nok"
  ) {
    let reaction = messageReaction;
    if (reaction.count >= 5) {
      reaction.message.delete();
    }
  }
});

client.on("message", async (message) => {
  //Anime Listener
  await getAnime(message);

  //Ping Listener
  if(message.mentions.members.has("102939281470816256") && message.author.bot === true && message.member.id !== client.user.id)
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

// Bishop Listener
// client.on("voiceStateUpdate", async (oldMember, newMember) => 
// {
//   try{
//     console.log(oldMember.voiceChannel.name)
//     console.log(oldMember.user.id)
//   }
//   catch{

//   }

//   if(oldMember.voiceChannel === undefined && oldMember.user.id === "212335473887019008")
//   {
//     let connection = await newMember.voiceChannel.join()
//     let stream = connection.playStream(ytdl("https://www.youtube.com/watch?v=M1wLtAXDgqg", { filter : 'audioonly' }));
//     stream.setVolumeDecibels(120)
//     stream.on("end", () => {
//       setTimeout(() => {
//         connection.playStream(ytdl("https://www.youtube.com/watch?v=vTIIMJ9tUc8", {filter: "audioonly"}))
//         stream.setVolumeDecibels(120)
//       }, 5000)
//     })
//   }
// })

process.on("SIGINT", async () => {
  await client.destroy();
  process.exit();
});
