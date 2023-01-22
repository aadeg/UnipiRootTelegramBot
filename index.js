const Bot = require('./src/bot');
const Db = require('./src/db');

const {
  BOT_TOKEN,
  NODE_ENV,
  REGION,
  PROJECT_ID,
  FUNCTION_TARGET
} = process.env;

const bot = new Bot(BOT_TOKEN);
const db = new Db(PROJECT_ID);

bot.on("message_received", async (msg) => {
  await db.onMessageReceived(msg);
});

if (NODE_ENV === 'debug') {
  bot.launch();
} else {
  exports.botHook = bot.webhookCallback();
}
