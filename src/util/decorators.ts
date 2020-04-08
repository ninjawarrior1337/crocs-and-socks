import { Command } from "discord.js-commando"
import HanamaruClient from "../structures/client"

function HCommand(name: String) {
    return function (constructor: Function) {
        constructor = function(client: HanamaruClient) {

        }

        
    }
}