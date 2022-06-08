const { MessageEmbed, Message } = require("discord.js");

module.exports = {
  name: "lock", 
  description: "Interdire/Autoriser l'accès à l'écriture à un salon.", 
  cooldown: 5,
  memberpermissions: ["MANAGE_CHANNELS"], 
  requiredroles: [], 
  alloweduserids: [],
  options: [ 
  {"StringChoices": { name: "choix", description: "Quel action voulez vous effectuer ?", required: true, choices: [["Bloquer", "lock"], ["Débloquer", "unlock"]] }},
  {"Channel": { name: "salon", description: "Dans quel salon voulez vous effectuer cette action ?", required: true }}, 
  ],
  run: async (client, interaction, message) => {
    try{

      const { member, channelId, guildId, applicationId, 
        commandName, deferred, replied, ephemeral, 
        options, id, createdTimestamp 
        } = interaction; 
      const { guild } = member;

      const channel = options.getChannel("salon")
      const choice = options.getString("choix")
      
      if(choice == "lock") {

        await channel.permissionOverwrites.edit(message.guild.roles.everyone.id, {
          SEND_MESSAGES: false
        })
  
        await interaction.reply({embeds: [new MessageEmbed()
          .setColor("BLURPLE")
          .setAuthor({ name: 'Permissions du salon', iconURL: interaction.user.displayAvatarURL({ size: 512, dynamic: true }), url: 'https://tazoukaa.tk/' })      
          .setDescription(`Salon bloqué avec succès par ${interaction.user.tag}`)]})

      } else if(choice == "unlock") {
        
        await channel.permissionOverwrites.edit(message.guild.roles.everyone.id, {
          SEND_MESSAGES: true
        })

        channel.bulkDelete(1)
        await interaction.reply({embeds: [new MessageEmbed()
          .setColor("BLURPLE")
          .setAuthor({ name: 'Permissions du salon', iconURL: interaction.user.displayAvatarURL({ size: 512, dynamic: true }), url: 'https://tazoukaa.tk/' })      
          .setDescription(`Salon débloqué avec succès par ${interaction.user.tag}`)], ephemeral:true})

      }
      
    } catch (e) {
        console.log(String(e.stack).bgRed)
    }
  }
}