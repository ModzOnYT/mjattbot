exports.run = (client, message, args) => {
  message.channel.send("Pong").then(m => {
    m.edit(`Pong **${m.createdTimestamp - message.createdTimestamp}ms**`);
  });
};
