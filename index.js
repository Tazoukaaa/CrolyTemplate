const Discord = require("discord.js");
const config = require(`./botconfig/config.json`);
const settings = require(`./botconfig/settings.json`);
const embedset = require(`./botconfig/embed.json`);
const colors = require("colors");
const Canvas = require("canvas");

const client = new Discord.Client({
  shards: "auto",
  allowedMentions: {
    parse: [],
    repliedUser: false,
  },
  partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
  intents: [
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_MEMBERS,
    Discord.Intents.FLAGS.GUILD_VOICE_STATES,
    Discord.Intents.FLAGS.GUILD_MESSAGES,
    Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
  ],
  presence: {
    activity: {
      name: `Music`,
      type: "LISTENING",
    },
    status: "online"
  }
});

client.commands = new Discord.Collection();
client.cooldowns = new Discord.Collection();
client.slashCommands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.categories = require("fs").readdirSync(`./commands`);

["events", "commands", "slashCommands", settings.antiCrash ? "antiCrash" : null]
  .filter(Boolean)
  .forEach(h => {
    require(`./handlers/${h}`)(client);
  })


// bienvenue

client.on("guildMemberAdd", async (member, guild) => {

  var canvas = Canvas.createCanvas(1024, 500);
  ctx = canvas.getContext("2d");
  var background = await Canvas.loadImage("./assets/background.png");
  ctx.drawImage(background, 0, 0, 1020, 500);

  ctx.font = "42px Impact";
  ctx.fillStyle = "#FFFFFF";
  ctx.textAlign = "center";
  ctx.fillText("BIENVENUE SUR LE SERVEUR", 630, 237)
  ctx.fillText(member.user.tag.toUpperCase(), 563, 300)
  ctx.beginPath();
  ctx.arc(218, 250, 119, 0, Math.PI * 2)
  ctx.closePath();
  ctx.clip()
  var avatarutilisateur = await Canvas.loadImage(member.user.displayAvatarURL({
    format: "png",
    size: 1024
  }))
  ctx.drawImage(avatarutilisateur, 78, 110, 280, 280)

  var attachement = new Discord.MessageAttachment(canvas.toBuffer(), "welcome.png")

  //anti bots
  if(config.antibot = true){
    if (member.user.bot) {
      member.kick("Anti-Bots - xSny")
    }
  }

  //welcome image
  if(config.welcomeimage = true) {
    client.channels.cache.get(req[0].chanwel).send({ files: [attachement] })
  }
  
  //auto role
  if(config.autorole = true) {
    try{
      member.roles.add("" + config.autoroleid + "")
    } catch {
      return;
    }
  }
})


client.login(config.token)