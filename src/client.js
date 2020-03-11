var { Client } = require("discord.js");

exports.bot = class extends Client {
  username() {
    return super.username;
  }
  
};
