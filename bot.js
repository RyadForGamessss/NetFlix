var Discord = require('discord.js');
var fs = require('fs');
var client = new Discord.Client();

client.on('ready', () => {
  console.log(`Welcome Bro ${client.user.tag}!`);
});
var prefix = '#'

client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id !== "488746365933846529") return;

  
  if (message.content.startsWith(prefix + 'Sw')) {
  client.user.setActivity(argresult, {type: 'WATCHING'})
     console.log('test' + argresult);
    message.channel.sendMessage(`:white_check_mark: ${argresult}`)
} 

 
  if (message.content.startsWith(prefix + 'Sl')) {
  client.user.setActivity(argresult, {type: 'LISTENING'})
     console.log('test' + argresult);
    message.channel.sendMessage(`:white_check_mark: ${argresult}`)
} 


if (message.content.startsWith(prefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`:white_check_mark: ${argresult}`)
  return message.reply("You Can change the username 2 times per hour");
} 

if (message.content.startsWith(prefix + 'Sa')) {
  client.user.setAvatar(argresult);
   message.channel.sendMessage(`:white_check_mark: ${argresult}`;
}

if (message.content.startsWith(prefix + 'St')) {
  client.user.setGame(argresult, "https://www.twitch.tv/peery13");
     console.log('test' + argresult);
    message.channel.sendMessage(`:white_check_mark: ${argresult}`)
} 
if (message.content.startsWith(prefix + 'Pl')) {
  client.user.setGame(argresult);
     console.log('test' + argresult);
    message.channel.sendMessage(`:white_check_mark: ${argresult}`)
} 



});


client.login(process.env.BOT_TOKEN);
