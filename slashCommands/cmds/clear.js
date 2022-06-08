const { MessageEmbed, Message } = require("discord.js");

module.exports = {
  name: "clear", //the command name for the Slash Command
  description: "Supprimer un nombre défini de messages.", //the command description for Slash Command Overview
  cooldown: 5,
  memberpermissions: ["MANAGE_MESSAGES"], //Only allow members with specific Permissions to execute a Commmand [OPTIONAL]
  requiredroles: [], //Only allow specific Users with a Role to execute a Command [OPTIONAL]
  alloweduserids: [], //Only allow specific Users to execute a Command [OPTIONAL]
  options: [ //OPTIONAL OPTIONS, make the array empty / dont add this option if you don't need options!
		{"Integer": { name: "number", description: "Combien de message voulez vous supprimer (min. 2 | max. 100) ?", required: true }}, //to use in the code: interacton.getChannel("what_channel")
	
  ],
  run: async (client, interaction) => {
    try{

      const { member, channelId, guildId, applicationId, 
        commandName, deferred, replied, ephemeral, 
        options, id, createdTimestamp 
        } = interaction; 
      const { guild } = member;

      const channel = guild.channels.cache.get(channelId);
      const number = options.getInteger("number")
      if(number >= 2 && number <= 100) {
        channel.bulkDelete(number)
        interaction.reply({embeds: [new MessageEmbed()
          .setColor("BLURPLE")
          .setThumbnail(client.user.displayAvatarURL({ size: 512, dynamic: true }))
          .setAuthor({ name: `${number} messages ont été supprimés dans ce salon`, iconURL: client.user.displayAvatarURL({ size: 512, dynamic: true }), url: 'https://tazoukaa.tk/' })], ephemeral: true}); 


      } else {
        interaction.reply({embeds: [new MessageEmbed()
          .setColor("BLURPLE")
          .setThumbnail(client.user.displayAvatarURL({ size: 512, dynamic: true }))
          .setAuthor({ name: `${number} messages ont été supprimés dans ce salon`, iconURL: client.user.displayAvatarURL({ size: 512, dynamic: true }), url: 'https://tazoukaa.tk/' })], ephemeral: true}); 

      }

    } catch (e) {
        console.log(String(e.stack).bgRed)
    }
  }
}