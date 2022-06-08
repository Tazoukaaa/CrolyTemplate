const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
  name: "invite", //the command name for the Slash Command
  description: "Afficher l'invitation du bot ou d'un autre bot.", //the command description for Slash Command Overview
  cooldown: 1,
  memberpermissions: [], 
  requiredroles: [], 
  alloweduserids: [],
  options: [ 
	{"User": { name: "robot", description: "Quel robot voulez vous inviter ?", required: false }}, //here the second arr
  ],
  run: async (client, interaction) => {
    try{
	    //console.log(interaction, StringOption)
		
		//things u can directly access in an interaction!
		const { member, channelId, guildId, applicationId, 
		        commandName, deferred, replied, ephemeral, 
				options, id, createdTimestamp 
		} = interaction; 
		const { guild } = member;
		

		let robot = options.getUser('robot')
		if(!robot) {
			interaction.reply({embeds: [new MessageEmbed()
				.setColor("BLURPLE")
				.setAuthor({ name: 'Inviter sur votre serveur', iconURL: client.user.displayAvatarURL({ size: 512, dynamic: true }), url: 'https://tazoukaa.tk/' })
				.setThumbnail(client.user.displayAvatarURL({ size: 512, dynamic: true }))
				.setDescription(`Lien d'invitation : [Cliquez ici](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands)
				Site Internet : [Cliquez ici](https://xsny.gg/)`)], ephemeral: true})
		} else if(robot !== "") {
			interaction.reply({embeds: [new MessageEmbed()
				.setColor("BLURPLE")
				.setAuthor({ name: 'Inviter sur votre serveur', iconURL: robot.displayAvatarURL({ size: 512, dynamic: true }), url: 'https://tazoukaa.tk/' })
				.setThumbnail(robot.displayAvatarURL({ size: 512, dynamic: true }))
				.setDescription(`Lien d'invitation : [Cliquez ici](https://discord.com/api/oauth2/authorize?client_id=${robot.id}&permissions=8&scope=bot%20applications.commands)
				
				__**ATTENTION :**__ Nous ne sommes pas reponsable des problèmes pouvant apparaitre lors de l'ajout de ce robot.`)], ephemeral: true})
		}

		

		//interaction.reply({embeds: [embed], components: [row]})

	} catch (e) {
        console.log(String(e.stack).bgRed)
    }
  }
}
