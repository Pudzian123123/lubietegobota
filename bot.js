const Discord = require('discord.js')
const bot = new Discord.Client();
var config = require("./config.json")
var blacklisted = require("./blacklisted.json").blacklisted

bot.on('ready', () => {
    console.log(`Botrappa Reborn (Alpha - Open Source Version) has launched with tag ${bot.user.tag} and Botrappa is operating on ${bot.guilds.size} servers!`)
    bot.user.setPresence({
        game: {
            name: `Wersja 1.0 | ${config.prefix}help | ${bot.guilds.size} servers!`,
            type: 0
        }
    });
    bot.user.setStatus("busy")
});

var prefix = config.prefix;

bot.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const args = message.content.split(" ");
  const command = args.shift().slice(prefix.length);

  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(bot, message, args, config);
  } catch (err) {
    console.error(err);
  }
});

bot.login('NzY3NTE2OTcwNzY5MDU1NzQ1.X4zD4Q.J34ZwuPf41kee49kUp5JIfXdJu0')

// Skultz.#0045 i know what bullshit you are doing. you're going to try to raid a server with this? with your tech indian malware bullshit. you should have been banned from discord, long by now. 