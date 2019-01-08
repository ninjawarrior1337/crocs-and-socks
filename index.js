const Commando = require("discord.js-commando");
const path = require("path");
const sqlite = require("sqlite");
const fs = require("fs");
const _ = require("underscore");
const yaml = require("js-yaml");

if (!fs.existsSync("./secrets.yaml")) {
  let template = { owner: "", token: "" };
  fs.writeFileSync("./secrets.yaml", yaml.safeDump(template, null, 2));
  console.log(
    "Looks like you're missing secrets.yaml, creating template then exiting."
  );
  process.exit();
} else {
  let secrets = yaml.safeLoad(fs.readFileSync("./secrets.yaml"));
  _.forEach(_.values(secrets), function(e) {
    if (e === "") {
      console.log(
        "Please edit secrets.yaml and fill in the required information!"
      );
      process.exit();
    }
  });
}

let secrets = yaml.safeLoad(fs.readFileSync("./secrets.yaml"));

const client = new Commando.Client({
  owner: secrets.owner,
  commandPrefix: "?",
  unknownCommandResponse: false,
  nonCommandEditable: true
});

client.registry
  .registerGroups([
    ["music", "Audio related commands"],
    ["weeb", "Weeb related commands"],
    ["fun", "Fun related commands"],
    ["testing", "Bot testing commands"],
    ["utils", "Utilities related commands"],
    ["photoediting", "Image editing related commands"],
    ["settings", "Settings Related Commands"]
  ])
  .registerDefaults()
  .registerTypesIn(path.join(__dirname, "customTypes"))
  .registerCommandsIn(path.join(__dirname, "commands"));

client
  .setProvider(
    sqlite
      .open(path.join(__dirname, "database.sqlite3"))
      .then(db => new Commando.SQLiteProvider(db))
  )
  .catch(console.error);

client.login(secrets.token);

client.on("ready", c => {
  console.log(`Sucessfully logged in as ${client.user.username}`);
  client.user.setActivity("osu!");
});

client.on("error", e => console.error(e));
client.on("warn", e => console.warn(e));

// Anime {} Listener
client.on("message", msg => {
  const animeRegex = new RegExp("{(.+?)}", "g");

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
