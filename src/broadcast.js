const Bot = require("./bot");
const Db = require("./db");

class Broadcast {
  constructor(bot, db) {
    this.bot = bot;
    this.db = db;
  }

  async broadcastMessage(message) {
    // const users = await this.db.getNotifiableUsers();
    users = [
      70021520
    ];

    for (const userId of users) {
      try {
        this.bot.bot.telegram.sendMessage(userId, message);
      } catch (err) {
        console.error(err);
      }
    }
  }

  functionCallback() {
    return (eventData, context, callback) => {
      console.log(eventData);
      console.log(context);
      const buffer = Buffer.from(eventData.data, 'base64');
      const data = buffer.toString();
      console.log(data);
      callback();
    }
  }
}

module.exports = Broadcast;