const firebase = require("firebase");

const firebaseRef = firebase.database().ref();

exports.run = (client, message, args) => {
  if (message.mentions.users.first()) {
    return message.channel.send(`Can't create tags with mentions.`);
  }
  let tag = args[0];
  var original = args.slice(1);
  var content = original.join(" ");
  if (content == null) {
    message.channel.send(`You didn't create any content for your tag!`);
  } else if (tag == null) {
    message.channel.send(`You didn't name your tag!`);
  } else {
    firebaseRef
      .child("Tags")
      .child("servers")
      .child(message.guild.id)
      .child(tag)
      .set(content);
    message.reply(`Created tag: ${tag} as ${content}`);
  }
};
