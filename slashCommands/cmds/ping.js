const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "ping", //the command name for the Slash Command
  description: "Récupérez les informations concernant le délai du robot ou de l'API utilisé.", //the command description for Slash Command Overview
  cooldown: 1,
  memberpermissions: [], 
  requiredroles: [], 
  alloweduserids: [],
  options: [ 

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


			await interaction.reply({embeds: [new MessageEmbed()
			.setTitle("Récupération du ping...")], ephemeral: true});

			interaction.editReply({embeds: [new MessageEmbed()
				.setColor("BLURPLE")
				.setThumbnail(client.user.displayAvatarURL({ size: 512, dynamic: true }))
				.setAuthor({ name: `Ping: \`${Math.floor((Date.now() - createdTimestamp) - 2 * Math.floor(client.ws.ping))} ms\``, iconURL: client.user.displayAvatarURL({ size: 512, dynamic: true }), url: 'https://discord.gg/SaUwhMDUfj' })], ephemeral: true}); 
   
			} catch (e) {
        console.log(String(e.stack).bgRed)
    }
  }
}
