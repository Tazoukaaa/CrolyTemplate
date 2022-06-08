const { MessageEmbed, Message } = require("discord.js");

module.exports = {
  name: "sanctions", 
  description: "Sanctionner un utilisateur sur votre serveur.", 
  cooldown: 5,
  memberpermissions: ["BAN_MEMBERS"], 
  requiredroles: [], 
  alloweduserids: [],
  options: [ 
  {"StringChoices": { name: "choix", description: "Quelle sanction voulez vous appliquer ?", required: true, choices: [["Bannir", "ban"], ["Exclure", "kick"], ["Mute", "mute"], ["Avertissements", "warn"]] }}, 
  {"User": { name: "utilisateur", description: "Quel utilisateur voulez vous sanctionner sur le serveur ?", required: true }}, 
  {"String": { name: "raison", description: "Pour quelle raison voulez vous sanctionner cet utilisateur ?", required: true }}, 
  ],
  run: async (client, interaction) => {
    try{

      const { member, channelId, guildId, applicationId, 
        commandName, deferred, replied, ephemeral, 
        options, id, createdTimestamp 
        } = interaction; 
      const { guild } = member;

      const user = options.getUser("utilisateur")
      const reason = options.getString("raison")
      const choice = options.getString("choix")





      if(choice == "ban") {

        const members = interaction.guild.members.cache.get(user.id) || await interaction.guild.members.fetch(user.id).catch(err => {})

        if(!members) return interaction.reply({content: `Impossible de trouver l'utilisateur, merci de ré-essayer.`, ephemeral: true});
  
        if(members.user.id === client.user.id) return interaction.reply({content: `Je ne peux pas bannir ce membre.`, ephemeral: true});
  
          await members.user.send({embeds: [new MessageEmbed()
            .setColor("BLURPLE")
            .setThumbnail(members.displayAvatarURL({ size: 512, dynamic: true }))
            .setAuthor({ name: 'Vous avez été banni d\'un serveur', iconURL: members.displayAvatarURL({ size: 512, dynamic: true }), url: 'https://tazoukaa.tk/' })      
            .addField("Serveur :", `${interaction.guild.name}`)
            .addField("Raison :", `${reason}`)
            .addField("Auteur :", `${interaction.user.tag}`)]}).catch(err => {})

          members.ban({ days: 7, reason: reason })

          interaction.reply({embeds: [new MessageEmbed()
            .setColor("BLURPLE")
            .setThumbnail(members.displayAvatarURL({ size: 512, dynamic: true }))
            .setAuthor({ name: `${members.user.tag} a été banni du serveur`, iconURL: members.displayAvatarURL({ size: 512, dynamic: true }), url: 'https://tazoukaa.tk/' })      
            .addField("Raison :", `${reason}`)
            .addField("Auteur :", `${interaction.user.tag}`)], ephemeral: true});
  



      } else if(choice == "kick") {
        const members = interaction.guild.members.cache.get(user.id) || await interaction.guild.members.fetch(user.id).catch(err => {})

      if(!members) return interaction.reply({content: `Impossible de trouver l'utilisateur, merci de ré-essayer.`, ephemeral: true});

      if(members.user.id === client.user.id) return interaction.reply({content: `Je ne peux pas expulser ce membre.`, ephemeral: true});

      await members.user.send({embeds: [new MessageEmbed()
        .setColor("BLURPLE")
        .setThumbnail(members.displayAvatarURL({ size: 512, dynamic: true }))
        .setAuthor({ name: 'Vous avez été expulser d\'un serveur', iconURL: members.displayAvatarURL({ size: 512, dynamic: true }), url: 'https://tazoukaa.tk/' })      
        .addField("Serveur :", `${interaction.guild.name}`)
        .addField("Raison :", `${reason}`)
        .addField("Auteur :", `${interaction.user.tag}`)]}).catch(err => {})

        members.kick({ reason: reason })
        
        
        interaction.reply({embeds: [new MessageEmbed()
          .setColor("BLURPLE")
          .setThumbnail(members.displayAvatarURL({ size: 512, dynamic: true }))
          .setAuthor({ name: `${members.user.tag} a été expulser du serveur`, iconURL: members.displayAvatarURL({ size: 512, dynamic: true }), url: 'https://tazoukaa.tk/' })      
          .addField("Raison :", `${reason}`)
          .addField("Auteur :", `${interaction.user.tag}`)], ephemeral: true});

      
      } else if(choice == "mute") {
        const members = interaction.guild.members.cache.get(user.id) || await interaction.guild.members.fetch(user.id).catch(err => {})

      if(!members) return interaction.reply({content: `Impossible de trouver l'utilisateur, merci de ré-essayer.`, ephemeral: true});
      if(members.user.id === client.user.id) return interaction.reply({content: `Je ne peux pas bannir ce membre.`, ephemeral: true});

      await members.user.send({embeds: [new MessageEmbed()
        .setColor("BLURPLE")
        .setThumbnail(members.displayAvatarURL({ size: 512, dynamic: true }))
        .setAuthor({ name: 'Vous avez été mute sur un serveur', iconURL: members.displayAvatarURL({ size: 512, dynamic: true }), url: 'https://tazoukaa.tk/' })      
        .addField("Serveur :", `${interaction.guild.name}`)
        .addField("Raison :", `${reason}`)
        .addField("Auteur :", `${interaction.user.tag}`)]}).catch(err => {})

        members.timeout( 1440 * 60 * 1000, reason )
        
        
        interaction.reply({embeds: [new MessageEmbed()
          .setColor("BLURPLE")
          .setThumbnail(members.displayAvatarURL({ size: 512, dynamic: true }))
          .setAuthor({ name: `${members.user.tag} a été mute sur le serveur`, iconURL: members.displayAvatarURL({ size: 512, dynamic: true }), url: 'https://tazoukaa.tk/' })      
          .addField("Raison :", `${reason}`)
          .addField("Auteur :", `${interaction.user.tag}`)], ephemeral: true});
        }
      

    } catch (e) {
        console.log(String(e.stack).bgRed)
    }
  }
}