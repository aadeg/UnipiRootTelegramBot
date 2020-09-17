const Telegraf = require('telegraf');
const Extra = require('telegraf/extra');
const messages = require('./messages');

const {
  BOT_TOKEN,
  NODE_ENV,
  PROJECT_ID,
  REGION
} = process.env;

class Bot {
  constructor(token = process.env.BOT_TOKEN, options = {}) {
    this.bot = new Telegraf(token, options);

    this.bot.start(ctx => ctx.reply(messages.start, Extra.HTML()));
    this.bot.command(
      'list',
      ctx => ctx.reply(messages.list, Extra.HTML())
    );
    this.bot.command(
      'faq',
      ctx => ctx.reply(messages.faq, Extra.HTML())
    );
    this.bot.command(
      'informatica',
      ctx => ctx.reply(messages.informatica, Extra.HTML())
    );
    this.bot.on(
      'text',
      ctx => ctx.reply(messages.start, Extra.HTML())
    );
  }

  startWebook(webhookUrl) {
    this.bot.telegram.setWebhook(webhookUrl);
    return (req, res) => {
      this.bot.handleUpdate(req.body, res);
    };
  }

  startPolling() {
    this.bot.startPolling();
  }

  launch() {
    this.bot.launch();
  }

  stop() {
    this.bot.stop();
  }
}

module.exports = Bot;