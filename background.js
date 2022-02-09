const { Message, Client, MessageEmbed } = require("discord.js");
const db = require("quick.db")


module.exports = {
    name: "background",
    run: async (client, message, args) => {
      
let args0 = args.join(" ")
let dindin = db.fetch(`gizmo.${message.author.id}`)
let cidade = 'https://media.discordapp.net/attachments/923403920993288213/940238846153592852/lawn_forest_mountains_144578_3840x2400.jpg?width=759&height=427'
let cave =  'https://media.discordapp.net/attachments/923403920993288213/940239455581798461/wp4698347.jpg?width=759&height=427'
let cave2 =
'https://media.discordapp.net/attachments/923403920993288213/940293231768404038/wp9371401.jpg?width=759&height=427'
  

if(args0==='Cidade'){
  if(dindin<15000) return message.reply(`Ops ${message.author} você não possui Gizmo coins suficiente!`)

  message.reply('<:dcl_ypSino:914350019182723122> | Background setado com sucesso!')
  db.subtract(`gizmo.${message.author.id}`, 15000)

  db.set(`bg.${message.author.id}`, cidade)
}
if(args0==='Cave'){
  if(dindin<50000) return message.reply(`Ops ${message.author} você não possui Gizmo coins suficiente!`)

  message.reply('<:dcl_ypSino:914350019182723122> | Background setado com sucesso!')
  db.subtract(`gizmo.${message.author.id}`, 50000)

  db.set(`bg.${message.author.id}`, cave)
}
if(args0==='Cave2'){
  if(dindin<1000000) return
message.reply(`Ops ${message.author} voce não possui Gizmo coins suficiente!`)

  message.reply('<:dcl_ypSino:914350019182723122> | Background setado com sucesso!')

  db.subtract(`gizmo.${message.author.id}`,1000000)

  db.set(`bg.${message.autjor.id}`, cave2)
}

if(!args0){
       const embed = new MessageEmbed()
   .setColor(`#0060EE`)
  .setTitle(`📣 | Loja de Backgrounds!`)
.setDescription(`> **Background #1**\n**Nome: \`Cidade\`**\n**Preço: \`15 mil Gizmo coins\`**\n**Preview: [Clique Aqui](https://media.discordapp.net/attachments/923403920993288213/940238846153592852/lawn_forest_mountains_144578_3840x2400.jpg?width=759&height=427)**\n> **Background #2**\n**Nome: \`Cave\`**\n**Preço: \`50 mil Gizmo coins\`**\n**Preview: [Clique Aqui](https://media.discordapp.net/attachments/923403920993288213/940239455581798461/wp4698347.jpg?width=759&height=427)**\n> **Background #3**\n**Nome: \`Cave2\`**\n**Preço: \`100 mil Gizmo coins\`**\n**Preview: [Clique Aqui](https://cdn.discordapp.com/attachments/916822325712797716/940762062513131560/wp9371401.png)**`)
         .setFooter(`Para comprar utilize G!background <nome>`);

message.reply({embeds: [embed]})
}
    },
};
