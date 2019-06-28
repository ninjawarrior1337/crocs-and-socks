const { Command } = require("discord-akairo");

export default class nou extends Command {
  constructor() {
    super("nou", {
      name: "nou",
      description: "Sends a reverse card",
      aliases: ["nou"],
      group: "fun",
      memberName: "nou"
    });
  }

  async exec(msg) {
    msg.channel.send({ files: ["https://i.imgur.com/3WDcYbV.png"] });
  }
}