const Bot = require('./src/bot');
const Firestore = require('@google-cloud/firestore');

const {
  BOT_TOKEN,
  NODE_ENV,
  REGION,
  PROJECT_ID,
  FUNCTION_TARGET
} = process.env;

const COLLECTION_NAME = '/chats';

const firestore = new Firestore({
  projectId: PROJECT_ID,
  timestampsinSnapshots: true
});

const bot = new Bot(BOT_TOKEN);

bot.on("message_received", async msg => {
  const { chat } = msg;

  try {
    await firestore.collection(COLLECTION_NAME)
      .doc(chat.id.toString())
      .set({
        id: chat.id,
        type: chat.type,
        lastSeen: new Date(),
        notificationEnabled: true
      });
  } catch (err) {
    console.error(err);
  }
});

if (NODE_ENV === 'debug') {
  bot.launch();
} else {
  exports.botHook = bot.webhookCallback();
}
