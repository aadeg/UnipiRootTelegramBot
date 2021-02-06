const { extractMessages, sendMessages, getUsers } = require('./utils');

let messages = [];
const userId = process.env.TELEGRAM_USER_ID || undefined;

async function analyzeCommits(pluginConfig, context) {
  const { logger, commits } = context;
  messages = extractMessages(commits);
  console.log(userId);

  logger.log(`Found ${messages.length} Telegram message`);
}

async function success(pluginConfig, context) {
  const { logger } = context;

  if (messages.length == 0)
    return;

  let users = await getUsers();
  if (userId) {
    users = [userId];
  }
  logger.log(`Sending Telegram message to ${users.length} users`);
  const errorUsers = sendMessages(messages, users);
  console.log("errorUsers: ", errorUsers);
}

module.exports = { 
  analyzeCommits, 
  success
};