const { Telegraf } = require('telegraf');
const Firestore = require('@google-cloud/firestore');

const header = "TELEGRAM NOTIFY:";
const COLLECTION_NAME = '/chats';

const {
  PROJECT_ID
} = process.env;

const firestore = new Firestore({
  projectId: PROJECT_ID,
  timestampsinSnapshots: true
});

function extractMessages(commits) {
  let messages = [];

  for (const commit of commits) {
    const { body } = commit;
    const index = body.indexOf(header);
    if (index != -1) {
      console.log(commit);
      const startIndex = index + header.length;
      let endIndex = body.indexOf('\n\n');
      endIndex = endIndex != -1 ? endIndex : body.length;

      messages.push(body.substr(startIndex, endIndex).trim());
    }
  }

  return messages.reverse();
}

function sendMessages(messages, users) {
  const message = messages.join("\n\n");
  const bot = new Telegraf(process.env.BOT_TOKEN);
  
  for (const userId of users) {
    bot.telegram.sendMessage(userId, message);
  }
  
}

async function getUsers() {
  const snapshot = await firestore.collection(COLLECTION_NAME).get();
  const users = snapshot.docs.map(d => d.data().id);
  return users;
}

module.exports = {
  extractMessages,
  sendMessages,
  getUsers
};