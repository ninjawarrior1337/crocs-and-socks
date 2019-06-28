import discord from 'discord.js'
import {AkairoClient} from 'discord-akairo'
import * as path from 'path'
import sqlite from 'sqlite'
import * as fs from 'fs'
import * as _ from 'underscore'
import imageOrUrl from './customTypes/imageOrString';
const yaml = require('js-yaml')

if (!fs.existsSync("./secrets.yaml")) {
  let template = { owner: "", token: "" };
  fs.writeFileSync("./secrets.yaml", yaml.safeDump(template, {indent: 2}));
  console.log(
    "Looks like you're missing secrets.yaml, creating template then exiting."
  );
  process.exit();
} else {
  let secrets = yaml.safeLoad(fs.readFileSync(path.join(__dirname, "..", "secrets.yaml")));
  _.forEach(_.values(secrets), function(e) {
    if (e === "") {
      console.log(
        "Please edit secrets.yaml and fill in the required information!"
      );
      process.exit();
    }
  });
}

let secrets = yaml.safeLoad(fs.readFileSync(path.join(__dirname, "..", "secrets.yaml")));

const client = new AkairoClient(
  {
    ownerID: secrets.owner,
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

client.login(secrets.token);

client.on("ready", () => {
  console.log(`Sucessfully logged in as ${client.user.username}`);
  client.user.setActivity("osu!");
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

//   if(oldMember.voiceChannel === undefined && oldMember.user.id === "456693764367450112")
//   {
//     let connection = await newMember.voiceChannel.join()
//     connection.playStream(ytdl("https://www.youtube.com/watch?v=UmzGs0YMS_Q", { filter : 'audioonly' }));
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
