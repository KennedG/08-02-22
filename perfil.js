const { Message, Client, MessageEmbed } = require("discord.js");
const db = require("quick.db")


module.exports = {
    name: "perfil",
    aliases: ['profile'],
    run: async (client, message, args) => {
      
let user = message.mentions.users.first() || message.author;

let idade = await
db.fetch(`idade_${user.id}`)
if(idade == null) idade = `Não setado!`;
let sobre = await db.fetch(`sobre${user.id}`)
if(sobre == null) sobre = `Não setado!`;      
let img = await db.fetch(`bg.${user.id}`)
if(img == null) img = 'https://media.discordapp.net/attachments/895445212464312381/938517215051911188/Bottom-sea-animals-fish-starfish-coral-water-art-drawing_1920x1200.png?width=683&height=427';      
let lews = await db.fetch(`gizmo.${user.id}`)
if(lews == null) lews = 0;
let cristais = await db.fetch(`cristais_${user.id}`)
if(cristais == null) cristais = 0;

       const embed = new MessageEmbed()
   .setColor(`#0060EE`)
  .setTitle(`<:info:916909634403573801> | Perfil de ${message.author.username}`)
  .setThumbnail(user.displayAvatarURL({ dynamic: true }))
.setDescription(`> **Básico**\n<:info:916909634403573801> **Username: \`${user.username}\`**\n<:download:910474079931338813> **Sobre Mim: \`${sobre}\`**\n> **Status** \n<:coinGizmo:940747974206713886> **Gizmo Coins: \`${lews}\`**\n<:az_cristal_old:940749107377627186> **Cristais: \`${cristais}\`**\n<:az_moderador_old:909264644168900629>**Idade: \`${idade}\`**\n<a:mundo:897137157704142888>**Background**`)
.setImage(img)
 .setFooter(`Pedido por: ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }));

message.reply({embeds: [embed]})
    },
};
