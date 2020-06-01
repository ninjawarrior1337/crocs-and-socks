# Crocks And Socks

The Discord Bot of The Future (未来ずら！) (Mirai Zura!) (This bot will be archived and replaced with something wayyyy better soon.)

# DISCLAIMER
I AM **NOT RESPONSIBLE IF THE BOT SENDS NSFW PICS IN A CHAT WITH THE USE OF THE REDDIT OR ANY OTHER COMMAND**, YOU HAVE BEEN WARNED.

# How to Install (Not Docker)

First:
```bash
~$ git clone https://github.com/ninjawarrior1337/crocs-and-socks.git
~$ npm install
```

After cloning and installing dependencies, create a file at the root of the downloaded project and create a file called ```.env```
In that file insert:

```dotenv
TOKEN=<token here>
OWNER=<owner id>
```
**Owner ID can be found by enabling developer mode in Discord and right clicking on your self in a server and then clicking on Copy ID**

This project uses a combination of Typescript and some ES7 stuff from Babel and therefore must be compiled.
The bot can be compiled by typing:
```bash
~$ npm run build
```
If yarn is desired:
```bash
~$ yarn build
```
Then to actually start the bot you run
```bash
~$ node dist/
```
Done! You're up and running!

Sidenote: Feel free to use [PM2](https://pm2.io/runtime/) as a means to get it to autostart on your sever
```bash
~$ npm install -g pm2
~$ pm2 start dist/bot.js
```

# How to install (Docker)
This bot has a data directory at ```/usr/share/app/data```, please mount it if you want server specific options to persist across recreation of the container.

The compose file and the following command will mount the data directory at the current directory in a folder called config. Feel free to change this.

## Command
```bash
~$ docker run -d -e "OWNER=<owner id>" -e "TOKEN=<discord token>" -v $PWD/config:/usr/share/app/data --restart always treelar/crocks-and-socks
```

## Compose
Copy this template into docker-compose.yml
```yml
version: "3"
services:
  bot:
    environment:
      - OWNER=<owner id>
      - TOKEN=<token>
    volumes:
      - $PWD/config:/usr/share/app/data
    restart: always
    image: treelar/crocks-and-socks
```
Finally run:
```bash
~$ docker-compose up -d
```

# About
This is a bot created using [Discord.JS](http://discord.js.org) and [Discord Akairo](https://www.npmjs.com/package/discord-akairo) as the underlying bot framework. I started this as a way to practice Javascript, now idk why I'm still maintaining this.

# Commands
## Main Commands
Command Name | What it do
-------- | --------
help|Displays all commands
translate|Translates the given input into the specified language.
joke|Sends a random joke (or the joke itself...)
morse|Changes the given input into morse code.
nitro| Sends a fake discord nitro message.
reddit| Sends a random recent post from the speificed subreddit.
moe|Streams music from [Listen.moe](http://listen.moe).
hiragana|Converts the given romaji into hiragana.
katakana|Converts the given romaji into katakana.
romaji|Converts the given kana to romaji.

## Command Shortcuts
Command Name | What it do
-------- | --------
nesoberi | Sends a random recent nesoberi post from [r/nesoberi](http://reddit.com/r/nesoberi)
sagiri | Sends a random recent sagiri post from [r/onetruelittlesister](http://reddit.com/r/onetruelittlesister)
lovelive | Sends a random recent love live post from  [r/lovelive](http://reddit.com/r/lovelive)
animeme | Sends a random recent animeme from [r/animemes](http://reddit.com/r/animemes)

## Voice Channel Sound Effects
These all play some sound effect in the executer's active VC or a specified VC.

Command Name | What it do
-------- | --------
theworld/dio | ZA WARUDO
yousoro | o7
chinese |Bruh
zura | 未来ずら (Congratulations Hanamaru on 4th Center)

# Options
Options can be set by using
```
?set <option name> <value / get>
```

**Things to note**
- If value is set to get, the bot will return the current value of the option
- If the value is inputed as ```on``` or ```off```, these are two reserved words as they will set the option to either true, or false respectively. **Specifying the value as true or false will NOT work**
- The list of current options are below.
- More will be added in the future.

Option | What It Do
-------- | --------
dio | Turns the auto reply dio picture on or off
