const { extractMessages, sendMessages, getUsers } = require('./utils');

let messages = [];
const userId = "70021520";

async function analyzeCommits(pluginConfig, context) {
  const { logger, commits } = context;
  messages = extractMessages(commits);

  logger.log(`Found ${messages.length} Telegram message`);
}

async function success(pluginConfig, context) {
  const { logger } = context;

  if (messages.length > 0) {
    let users = await getUsers();
    users = [userId];
    logger.log(`Sending Telegram message to ${users.length} users`);
    sendMessages(messages);
  }
}

module.exports = { 
  analyzeCommits, 
  success
};