const { Command } = require("discord.js-commando");
const _ = require("lodash");

let possibilities = [
  "I came back here to see what you guys posted, and then you wonder why we’re upset? You people insulting The Gaming Weekly on a daily basis is one of the reasons why we're upset here! Nevertheless, for anybody here questioning our “arguments,” they’re quite simple to comprehend. First off, my broadcast colleagues Undead and Billy were wrongfully banned. I’ve done the research and digging, and this was a misunderstanding. Which leads me to the second argument: the moderators did not handle this professionally. Undead and Billy called them out for their misconduct, however, instead of listening, they immediately insulted them. The third argument is how The Gaming Weekly should deserve more respect around here, and everywhere else to be honest. Claiming that we are sub-botting? Didn’t one of you get upset for me making an assumption about Discord? Oh right, nobody here will admit their wrongdoings. And our fourth argument is why The Gaming Weekly is in fact original content, as well as why we only get “1,000 views” per video. There’s a clear and rational explanation as to why that is.",
  `Ladies and gentlemen of the discord, let me start out by saying this is absolutely ridiculous . Why in the world are you people going against the greatest channel in the history of channels? I mean honestly, TGW should win an award for how mesmerizing the content is. As for Undead and Billy, they didn't do anything wrong the way I see it. All I see are a bunch of people whining and complaining left and right on the worst app.
    And yes, Discord in my opinion, is horrible!`
];

class adrian extends Command {
  constructor(client) {
    super(client, {
      name: "adrian",
      group: "fun",
      memberName: "adrian",
      description: "Epic Copy Pasta Lol"
    });
  }

  async run(msg) {
    msg.channel.send(possibilities[_.random(possibilities.length - 1)]);
  }
}

module.exports = adrian;
