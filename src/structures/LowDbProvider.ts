import { Provider } from "discord-akairo";
import path from "path"

//Low db
import low from 'lowdb'
const FileSync = require("lowdb/adapters/FileSync")

export default class LowDbProvider extends Provider
{
    constructor(private dbPath) {super()}
    private db;
    public clear(id: string)
    {
        this.db.set(`servers.${id}`, {})
    }
    public delete(id: string, key: string)
    {
        this.db.unset(`servers.${id}.${key}`)
    }
    public get(id: string, key: string, defaultValue: any)
    {
        if(!this.db.has(`servers.${id}.${key}`).value())
            return defaultValue
        let value = this.db.get(`servers.${id}.${key}`).value()

        if(typeof value === undefined)
            return defaultValue
        else
            return value

    }
    public init()
    {
        const adapter = new FileSync(this.dbPath)
        this.db = low(adapter)
        this.db.defaults({servers: {}})
    }
    public set(id: string, key: string, value: any)
    {
        this.db.set(`servers.${id}.${key}`, value).write()
    }
}