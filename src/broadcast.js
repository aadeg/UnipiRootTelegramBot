const Bot = require("./bot");
const Db = require("./db");

class Broadcast {
  constructor(bot, db) {
    this.bot = bot;
    this.db = db;
  }

  async broadcastMessage(message, group) {
    console.log(`Message: ${message}`);
    console.log(`Message: ${group}`);
    const users = await this.getUsers(group);

    for (const userId of users) {
      try {
        this.bot.bot.telegram.sendMessage(userId, message);
        console.log(`\tSent to ${userId}`);
      } catch (err) {
        console.error(`\tError while sending to ${userId}. ${err.message}`);
      }
    }
  }

  async getUsers(group) {
    if (group == "all") {
      console.log("Group == all");
      // return await this.db.getNotifiableUsers();
      return await this.db.getDevUsers();
    } else if (group == "dev") {
      console.log("Group == dev");
      return await this.db.getDevUsers();
    } else {
      throw new Error(`"${group}" is not a valid group`);
    }
  }

  functionCallback() {
    return async (eventData, context, callback) => {
      const buffer = Buffer.from(eventData.data, 'base64');
      const data = JSON.parse(buffer.toString());
      const { broadcastMessage, group } = data;

      await this.broadcastMessage(broadcastMessage, group);
      callback();
    }
  }
}

module.exports = Broadcast;