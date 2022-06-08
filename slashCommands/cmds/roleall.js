const { MessageEmbed, Message, MessageActionRow, MessageSelectMenu, MessageButton } = require("discord.js");

module.exports = {
  name: "rôleall",
  description: "Ajouter/Retirer un rôle à l'entiéreté du serveur.",
  cooldown: 5,
  memberpermissions: ["MANAGE_ROLES"], 
  requiredroles: [], 
  alloweduserids: [],
  options: [
  {"StringChoices": { name: "choix", description: "Quelle action voulez vous effectuer ?", required: true, choices: [["Ajouter", "add"], ["Retirer", "remove"]] }}, //here the second arr
  {"Role": { name: "role", description: "Quel rôle souhaitez vous définir pour cette action ?", required: true }},
  ],
  run: async (client, interaction) => {
    try{
      const { member, channelId, guildId, applicationId, 
        commandName, deferred, replied, ephemeral, 
        options, id, createdTimestamp 
        } = interaction; 
      const { guild } = member;

      let role = options.getRole("role")
      const choice = options.getString("choix")

      if(choice == "add") {
        let memberr = await guild.members.fetch()
        memberr.forEach(element => {
          element.roles.add(role)
          interaction.reply({embeds: [new MessageEmbed()
            .setColor("BLURPLE")
            .setThumbnail(client.user.displayAvatarURL({ size: 512, dynamic: true }))
            .setAuthor({ name: 'Ajout de rôle effectué avec succès', iconURL: client.user.displayAvatarURL({ size: 512, dynamic: true }), url: 'https://tazoukaa.tk/' })
            .setDescription(`Le rôle ${role} à été ajouté à tout les membres avec succès.`)], ephemeral:true})
        });
      } else if(choice == "remove") {
        let memberr = await guild.members.fetch()
        memberr.forEach(element => {
          element.roles.remove(role)
          interaction.reply({embeds: [new MessageEmbed()
          .setColor("BLURPLE")
          .setThumbnail(client.user.displayAvatarURL({ size: 512, dynamic: true }))
          .setAuthor({ name: 'Retrait de rôle effectué avec succès', iconURL: client.user.displayAvatarURL({ size: 512, dynamic: true }), url: 'https://tazoukaa.tk/' })
          .setDescription(`Le rôle ${role} à été retiré à tout les membres avec succès.`)], ephemeral:true})
        });
      }
    } catch (e) {
        console.log(String(e.stack).bgRed)
    }
  }
}