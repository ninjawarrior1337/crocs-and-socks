const commando = require("discord-akairo")
const getFace = require("cool-ascii-faces")

class face extends commando.Command
{
	constructor()
	{
		super("face", {
			description: "Sends a random ascii face",
			name: "face",
			memberName: "face",
			group: "fun",
			aliases: ["face", "ascii", "cool_face"]
		})
	}
	
	async exec(msg)
	{
		msg.channel.send(getFace().toString())
	}
	
}

module.exports = face;