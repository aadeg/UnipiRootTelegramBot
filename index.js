const Bot = require('./src/bot');

const {
  BOT_TOKEN,
  NODE_ENV,
  PROJECT_ID,
  REGION,
  FUNCTION_TARGET
} = process.env;

const bot = new Bot(BOT_TOKEN);
if (NODE_ENV === 'production') {
  const url = `https://${REGION}-${PROJECT_ID}.cloudfunctions.net/${FUNCTION_TARGET}`;
  exports.botHook = bot.startWebook(url);
} else {
  bot.launch();
}