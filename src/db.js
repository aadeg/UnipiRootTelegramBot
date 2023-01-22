const Firestore = require('@google-cloud/firestore');
const { DateTime } = require('luxon')

const CHATS_COLLECTION = '/chats';
const STATS_COLLECTION = '/stats';

class Db {
  constructor(projectId = process.env.PROJECT_ID) {
    this.firestore = new Firestore({
      projectId: projectId,
      timestampsinSnapshots: true
    });
  }

  async updateChatsCollection(msg) {
    const { chat } = msg;
    await this.firestore.collection(CHATS_COLLECTION)
      .doc(chat.id.toString())
      .set({
        id: chat.id,
        type: chat.type,
        lastSeen: new Date(),
        notificationEnabled: true
      });
  }

  async updateStatsCollection(msg) {
    const { chat } = msg;

    const statsDocRef = this.firestore.collection(STATS_COLLECTION)
      .doc(DateTime.now().toFormat('WWyyyy'));
    const statsDoc = await statsDocRef.get();
    if (!statsDoc.exists) {
      await statsDocRef.create({
        year: DateTime.now().year,
        week: DateTime.now().weekNumber,
        requests: 1,
        uniqueUsers: 1,
        usersList: [chat.id]
      });
    } else {
      let { requests, usersList } = statsDoc.data();
      if (usersList.find(el => el == chat.id) == undefined) {
        usersList.push(chat.id);
      }

      await statsDocRef.update({
        requests: requests + 1,
        usersList: usersList,
        uniqueUsers: usersList.length
      });
    }
  }

  async onMessageReceived(msg) {
    try {
      await this.updateChatsCollection(msg);
      await this.updateStatsCollection(msg);
    } catch (err){
      const logEntry = {
        severity: 'ERROR',
        type: err.name,
        message: err.message,
        stack: err.stack,
        component: 'db'
      }
      console.error(JSON.stringify(logEntry));
    }
  } 
}

module.exports = Db;