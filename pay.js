const Discord = require("discord.js");
const db = require("quick.db");
const ms = require('parse-ms');

module.exports.run = async (client, message, args) => {
    
    let user = message.mentions.members.first() 

    let member = db.fetch(`gizmo.${message.guild.id}_${message.author.id}`)

    let embed1 = new Discord.MessageEmbed()
    .setColor("#008000")
    .setDescription(`🚫 **|** Mencione alguem para pagar!`);

    if (!user) {
        return message.channel.send({embeds: [embed1]})
    }
    let embed2 = new Discord.MessageEmbed()
    .setColor("#008000")
    .setDescription(`🚫 **|** Coloque o valor do pagamento!`);
  
    if (!args[1]) {
        return message.channel.send({embeds:  [embed2]})
    }
    let embed4 = new Discord.MessageEmbed()
    .setColor("#008000")
    .setDescription(`🚫 **|** Você não Dinheiro suficiente para realizar o pagamento!`);

    if (member < args[1]) {
        return message.channel.send({embeds: [embed4]})
    }
    let embed5 = new Discord.MessageEmbed()
    .setColor("#008000")
    .setDescription(`🚫 **|** Você tem que colocar um valor maior que **0** para realizar o pagamento!`);

    if(args[1] < 0) {
        return message.channel.send({embeds: [embed5]})
    }
    let embed7 = new Discord.MessageEmbed()
    .setColor("#008000")
    .setDescription(`🚫 **|** Você tem que colocar um valor numerico para realizar o pagamento!`);

    if (isNaN(args[1])){
        return message.channel.send({embeds: [embed7]})
    }
    let embed6 = new Discord.MessageEmbed()
    .setTitle("💵 **|** Pagamento")
    .setColor("#008000")
    .setDescription(`💵 Você pagou o ${user} com **R$${args[1]}**!`);


    message.channel.send({embeds: [embed6]})
    db.add(`gizmo.${message.guild.id}_${user.id}`, args[1])
    db.subtract(`gizmo.${message.guild.id}_${message.author.id}`, args[1]) 
}