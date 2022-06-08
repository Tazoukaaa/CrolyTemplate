const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
  name: "botinfo", //the command name for the Slash Command
  description: "Récupérez les informations concernant le robot.", //the command description for Slash Command Overview
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
		

		let embed = new MessageEmbed()
		.setColor("BLURPLE")
		.setThumbnail(client.user.displayAvatarURL({ size: 512, dynamic: true }))
		.setAuthor({ name: 'Information sur le bot', iconURL: client.user.displayAvatarURL({ size: 512, dynamic: true }), url: 'https://tazoukaa.tk/' })
		.setDescription(`**🤖・Identité :**
		> **Nom:** ${client.user.username} \`\`${client.user.tag}\`\`
		> **ID:** ${client.user.id}
		
		**<:certifieddeveloper:979453436242317373>・Développeur :**
		> **Nom:** Tazoukaa#0001
		> **ID:** 955566789729849384
		
		**🖥️・Informations techniques :**
		> **Hebergeur:** Serveur privé
		> **OS:** Linux 5.10.0-14-amd64
		> **Version:** v1.0.1.2`)

		let row = new MessageActionRow()
		.addComponents(new MessageButton()
		.setURL("https://discord.gg/")
		.setLabel("Support")
		.setEmoji("<:certifieddeveloper:979453436242317373>")
	  	.setStyle("LINK"),
	  	new MessageButton()
      	.setURL("https://google.com/")
      	.setLabel("Site")
		.setEmoji("📌")
		.setStyle("LINK"),
		new MessageButton()
		.setCustomId("commands")
		.setLabel("Commandes")
		.setEmoji("📚")
		.setStyle("SUCCESS"))
		

		interaction.reply({embeds: [embed], components: [row]})

	} catch (e) {
        console.log(String(e.stack).bgRed)
    }
  }
}
