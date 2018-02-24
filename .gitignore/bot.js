const botsettings = require("./botsettings.json");
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const ytdl = require("ytdl-core");


bot.on('ready', function() {
    bot.user.setGame("Command: o:info");
    console.log("XD-11 Connectée !")
});

bot.login(botsettings.token);

bot.on("guildMemberAdd", member => {
    let role = member.guild.roles.find("name","🐑*~Random~*🐑")
    member.guild.channels.find("name","annonces")
    .sendMessage(":eye: Hello " + member.toString() + " ! Bienvenue sur ce serveur ! Enjoy !")
    member.addRole(role)
    console.log("Nouveau membre !")
})

bot.on("guildMemberRemove", member => {
    member.guild.channels.find("name","annonces")
    .send(":eye: ${member.user.username} ++")
    console.log("Quelqu'un a leave :/")
})

bot.on("message", message => {
    if (message.content === (botsettings.prefix) + "info"){
        const embed = new Discord.RichEmbed()
        .setColor("#8da1c5")
        .setAuthor("XD-11 general","https://media.giphy.com/media/xThtahFojTeEDqq6Nq/giphy.gif")
        .setTitle("__Infos__")
        .setDescription("Bot by [Koduro_Komi](https://twitter.com/Koduro_Komi)",true)
        .addField("o:help","Liste Commandes",true)
        .addField("Version du bot :","1.0.3",true)
        .addField("Dernière MAJ :","Le 04/02/2018",true)
        .addField("Détails de la MAJ :","Changement du design de XD-11 ;\n Ajout du message de bienvenue ;\n Ajout de l'ajout de rôle automatique ;",true)
        .setFooter("Bot by Koduro_Komi#0216", "https://i.imgur.com/RW42E3T.gif")
        message.channel.send({embed});
        console.log("o:info effectué")
    }

    if (message.content === (botsettings.prefix) + "help"){
        const embed = new Discord.RichEmbed()
        .setColor("#5d70aa")
        .setAuthor("XD-11 general","https://media.giphy.com/media/xThtahFojTeEDqq6Nq/giphy.gif")
        .setTitle("__Help__")
        .addField("o:help","Affiche la liste des commandes",true)
        .addField("o:ping","Affiche le ping du bot",true)
        .addField("o:invit","Give l'invitation du bot",true)
        .setFooter("Bot by Koduro_Komi#0216", "https://i.imgur.com/RW42E3T.gif")
        message.channel.send({embed});
        console.log("o:help effectué")
    }

    if (message.content === (botsettings.prefix) + "ping"){
        const embed = new Discord.RichEmbed()
        .setColor("#3f5394")
        .setDescription("**Pong !** " + `${bot.pings[0]}` + " ms",true)
        message.channel.send({embed});
        console.log("o:help effectué")

    }

    if (message.content === (botsettings.prefix) + "invit"){
        const embed = new Discord.RichEmbed()
        .setColor("#3f5394")
        .setTitle("__Invitations__")
        .addField("XD-11 general","[Clic !](https://discordapp.com/api/oauth2/authorize?client_id=396959654837747715&permissions=2146958583&scope=bot)",true)
        message.channel.send({embed});
        console.log("o:invit effectué")

    }


    


    if (message.content === "Salut"){
        message.reply("Hey ! ^^")
        console.log("Say : salut")
    }
    if (message.content === "salut"){
        message.reply("Hey ! ^^")
        console.log("Say : Salut")
    }
    if (message.content === "Cc"){
        message.reply("Hello ! ^^")
        console.log("Say : Cc")
    }

    if (message.content === "cc"){
        message.reply("Hello ! ^^")
        console.log("Say : cc")
    }

    if (message.content === "Pd"){
        message.channel.send("Retourne jouer à la barbie.", {tts: true});
            console.log("Insulte : Pd")
        }

;})
