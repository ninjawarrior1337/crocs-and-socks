const commando = require("discord.js-commando")
const getFace = require("cool-ascii-faces")

class face extends commando.Command
{
	constructor(client)
	{
		super(client, {
			description: "Sends a random ascii face",
			name: "face",
			memberName: "face",
			group: "fun",
			aliases: ["face", "ascii", "cool_face"]
		})
	}
	
	async run(msg)
	{
		msg.channel.send(getFace())
	}
	
}

module.exports = face;