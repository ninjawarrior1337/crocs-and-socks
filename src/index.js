import discord from 'discord.js'
import {AkairoClient, SQLiteProvider} from 'discord-akairo'
import * as path from 'path'
import sqlite from 'sqlite'
import * as fs from 'fs'
import * as _ from 'underscore'
import imageOrUrl from './customTypes/imageOrString';
import soundEffect from './util/soundEffect';
import ytdl from 'ytdl-core'
const yaml = require('js-yaml')

require('dotenv').config()

// if (!fs.existsSync("./secrets.yaml")) {
//   let template = { owner: "", token: "" };
//   fs.writeFileSync("./secrets.yaml", yaml.safeDump(template, {indent: 2}));
//   console.log(
//     "Looks like you're missing secrets.yaml, creating template then exiting."
//   );
//   process.exit();
// } else {
//   let secrets = yaml.safeLoad(fs.readFileSync(path.join(__dirname, "..", "secrets.yaml")));
//   _.forEach(_.values(secrets), function(e) {
//     if (e === "") {
//       console.log(
//         "Please edit secrets.yaml and fill in the required information!"
//       );
//       process.exit();
//     }
//   });
// }

// let secrets = yaml.safeLoad(fs.readFileSync(path.join(__dirname, "..", "secrets.yaml")));

// class CustomClient extends AkairoClient
// {
//     constructor(AkairoOptions, ClientOptions) {
//       super(AkairoOptions, ClientOptions)
//       this.settings = new SQLiteProvider(sqlite.open('./../db.sqlite').then(), 'crocsandsocks', {
//         idColumn: 'guild_id',
//         dataColumn: 'settings'
//       })
//     }

//     login(token) {
//       return this.settings.init().then(() => super.login(token))
//     }
// }

const client = new AkairoClient(
  {
    ownerID: process.env.OWNER,
    prefix: "?",
    commandUtil: true,
    handleEdits: true,
    commandDirectory: path.join(__dirname, "commands"),
    automateCategories: true
  }, 
  {
    disableEveryone: true
  }
);

client.build()

client.commandHandler.resolver.addType("imgorstr", imageOrUrl)

//Each soundeffect
// for (let file of fs.readdirSync(path.join(__dirname, "..", "assets", "audio")))
// {
//   let {name, base} = path.parse(file)
//   console.log({name, base})
//   client.commandHandler.load(new soundEffect(name, [name], base))
// }

client.login(process.env.TOKEN);

client.on("ready", () => {
  console.log(`Sucessfully logged in as ${client.user.username}`);
  client.user.setActivity("Aqours Songs", {type: "LISTENING"});
});

client.on("error", e => console.error(e));
client.on("warn", e => console.warn(e));

// Anime {} Listener
client.on("message", msg => {
  const animeRegex = new RegExp("{(?<show>.+?)}", "gm");

  if (msg.author === client.user) return;

  console.log(msg.content.match(animeRegex));
});

// の/ノ listener
client.on("messageReactionAdd", (messageReaction, user) => {
  if (messageReaction.message.guild == undefined) return;

  if (
    messageReaction.emoji.name == "noh" ||
    messageReaction.emoji.name == "nok"
  ) {
    let reaction = messageReaction;
    if (reaction.count >= 5) {
      reaction.message.delete();
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

// client.on("message", (msg) =>
// {
//     _.forEach(msg.attachments.array(), (val, index) => {
//         console.log(val.url)
//     })
// })

process.on("SIGINT", async () => {
  await client.destroy();
  process.exit();
});
