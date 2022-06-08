const { MessageEmbed, Message, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
  name: "embed", 
  description: "Envoyer un message sous forme d'embed.", 
  cooldown: 5,
  memberpermissions: ["MANAGE_CHANNELS"], 
  requiredroles: [], 
  alloweduserids: [],
  options: [ 
    {"String": { name: "titre", description: "Quel sera le titre de votre embed ?", required: true}},
    {"String": { name: "description", description: "Quel sera la description de votre embed ?", required: true}},
    {"String": { name: "footer", description: "Quel sera le footer de votre embed ?", required: false}},
    {"String": { name: "couleur", description: "Quel sera la couleur de votre embed ?", required: false}},
  ],
  run: async (client, interaction, message) => {
    try{

      const { member, channelId, guildId, applicationId, 
        commandName, deferred, replied, ephemeral, 
        options, id, createdTimestamp 
        } = interaction; 
      const { guild } = member;

      const title = options.getString("titre")
      const desc = options.getString("description")
      const footer = options.getString("footer")
      const color = options.getString("couleur")
      
      let embed = new MessageEmbed()
      .setColor(String(color ? color: "#ff0000"))
      .setTitle(String(title).substr(0, 256))
		  .setDescription(String(desc).substr(0, 2048).split("+n+").join("\n"))
		  .setFooter(String(footer ? footer : `Message de ${interaction.user.tag}`), guild.iconURL({dynamic: true}));

      interaction.reply({embeds: [embed]})

      
    } catch (e) {
        console.log(String(e.stack).bgRed)
    }
  }
}