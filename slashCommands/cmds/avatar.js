const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "avatar", //the command name for the Slash Command
  description: "Récupérer l'avatar d'un utilisateur.", //the command description for Slash Command Overview
  cooldown: 5,
  memberpermissions: [], 
  requiredroles: [], 
  alloweduserids: [], 
  options: [ 
		{"User": { name: "utilisateur", description: "Sélectionner l'utilisateur cibler", required: false }}, //to use in the code: interacton.getString("title")
  ],
  run: async (client, interaction) => {
    try{


		const { member, channelId, guildId, applicationId, 
		        commandName, deferred, replied, ephemeral, 
				options, id, createdTimestamp 
		} = interaction; 
		const { guild } = member;
		
		let membe = options.getUser('utilisateur')

		if(!membe) membe = interaction.user

		var embed = new MessageEmbed()
    .setColor("BLURPLE")
		.setDescription("Avatar de " + membe.tag)
		.setImage(membe.displayAvatarURL({ size: 512, dynamic: true }))

		interaction.reply({embeds: [embed], ephemeral: true})

    } catch (e) {
        console.log(String(e.stack).bgRed)
    }
  }
}
