const Bot = require("./bot");
const Db = require("./db");

class Broadcast {
  constructor(bot, db) {
    this.bot = bot;
    this.db = db;
  }

  async broadcastMessage(message) {
    // const users = await this.db.getNotifiableUsers();
    const users = [
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
    return async (eventData, context, callback) => {
      const buffer = Buffer.from(eventData.data, 'base64');
      const data = JSON.parse(buffer.toString());
      const { broadcastMessage } = data;

      await this.broadcastMessage(broadcastMessage);
      callback();
    }
  }
}

module.exports = Broadcast;