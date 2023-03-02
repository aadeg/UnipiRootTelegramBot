const Firestore = require('@google-cloud/firestore');
const { ErrorReporting } = require('@google-cloud/error-reporting')
const { DateTime } = require('luxon')

const CHATS_COLLECTION = '/chats';
const STATS_COLLECTION = '/stats';
const errors = new ErrorReporting();

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

    const docRef = this.firestore.collection(STATS_COLLECTION)
      .doc(DateTime.now().toFormat('WWyyyy'));

    await this.firestore.runTransaction(async (t) => {
      const doc = await t.get(docRef);
      if (!doc.exists) {
        t.create(docRef, {
          year: DateTime.now().year,
          week: DateTime.now().weekNumber,
          requests: 1,
          uniqueUsers: [chat.id]
        });
      } else {
        t.update(docRef, {
          requests: Firestore.FieldValue.increment(1),
          uniqueUsers: Firestore.FieldValue.arrayUnion(chat.id)
        });
      }
    });
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
      errors.report(err);
    }
  }

  async getNotifiableUsers() {
    const snapshot = await this.firestore.collection(CHATS_COLLECTION)
      .where("notificationEnabled", "==", true)
      .get();
    const users = snapshot.docs.map(d => d.data().id);
    return users;
  }

  async getDevUsers() {
    const snapshot = await this.firestore.collection(CHATS_COLLECTION)
      .where("devUser", "==", true)
      .get();
    const users = snapshot.docs.map(d => d.data().id);
    return users;
  }
}

module.exports = Db;