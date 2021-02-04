const Bot = require('./src/bot');
const Firestore = require('@google-cloud/firestore');

const {
  BOT_TOKEN,
  NODE_ENV,
  GCP_PROJECT,
  FUNCTION_REGION,
  FUNCTION_TARGET
} = process.env;

const COLLECTION_NAME = '/chats';

const firestore = new Firestore({
  projectId: GCP_PROJECT,
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
        lastSeen: new Date()
      });
  } catch (err) {
    console.error(err);
  }
});

if (NODE_ENV === 'debug') {
  bot.launch();
} else {
  const url = `https://${FUNCTION_REGION}-${GCP_PROJECT}.cloudfunctions.net/${FUNCTION_TARGET}`;
  console.log(`Webhook url: ${url}`);
  exports.botHook = bot.startWebook(url);
}
