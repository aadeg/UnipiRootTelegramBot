const Telegraf = require('telegraf');
const Extra = require('telegraf/extra');

const {
  BOT_TOKEN,
  NODE_ENV,
  PROJECT_ID,
  REGION
} = process.env;

const messages = require('./messages')
console.log(messages)

const bot = new Telegraf(BOT_TOKEN);
bot.start(ctx => ctx.reply(messages.start, Extra.HTML()));
// bot.on('message', ctx => ctx.reply(messages.start, Extra.HTML()));
bot.command('list', ctx => ctx.reply(messages.list, Extra.HTML()));
bot.command('faq', ctx => ctx.reply(messages.faq, Extra.HTML()))
bot.command('informatica', ctx => ctx.reply(messages.informatica, Extra.HTML()));

if (NODE_ENV === 'production') {
  bot.telegram.setWebhook(
    `https://${REGION}-${PROJECT_ID}.cloudfunctions.net/${process.env.FUNCTION_TARGET}`,
  );
  exports.botHook = (req, res) => {
    bot.handleUpdate(req.body, res);
  };
} else {
  bot.launch();
}