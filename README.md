# Croly - Discord Bot Template
Une base squelette d'un robot Discord développer en JavaScript, utilisant le module `discord.js` en V13, permettant les ***Slash Commands*** & ***Text Commands*** sur le/les serveur(s).
Il ne comprend pour le moment pas de fonction, ***multi-serveurs***, mais nous restons à l'écoute de ce genre de propositions.

# Avertissements
⚠️ | Il faut avoir les intents activés sur votre ***[espace développeur](https://discord.com/developers/applications)*** de Discord.
<br>
⚠️ | L'intent `message content` va être obselète le 31 aout 2022.
<br><br>
![Discord Developpers](/intents.png)

# Composition de la base
    - assets
      - fichiers ressources

    - botconfig
      - fichiers de configuration du robot

    - commands
      - commande via prefix
      
    - events
      - évennements du robot
    
    - handlers
      - manipulateurs du robot
    
    - slashCommand
      - commandes via slash (prioritaire)

# Installation
Pour installer cette version du bot, vous devez:

1. Clone le repository
2. Ouvrir le dossier dans un IDE quelconque (Visual Studio Code, NotePad++, ...)
3. Compléter tout les champs de configuration dans le fichier <a href="https://github.com/Tazoukaaa/CrolyTemplate/blob/main/botconfig/config.json">`config.json`</a>
4. Lancer un terminal et faite la commande suivante `npm install`
5. Toujours dans le terminal faîtes `node index.js`

# Voilà votre robot est maintenant lancer !

***Merci d'utiliser notre robot. Nous faisons tout pour satisfaire au mieux votre confort.***
Ce robot n'est **pas forcément là dans le but d'être optimisé mais** bien dans le but d'aider les **utilisateur cherchant à avoir un robot unique**.
