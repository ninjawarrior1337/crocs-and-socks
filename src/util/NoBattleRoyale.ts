import HanamaruClient from "../structures/client";

export default function EnableNoBattleRoyale(client: HanamaruClient) {
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
}
