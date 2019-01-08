const { Command } = require("discord.js-commando");

class nou extends Command {
  constructor(client) {
    super(client, {
      name: "nou",
      description: "Sends a reverse card",
      group: "fun",
      memberName: "nou"
    });
  }

  async run(msg) {
    msg.channel.send({ files: ["https://i.imgur.com/3WDcYbV.png"] });
  }
}

module.exports = nou;
