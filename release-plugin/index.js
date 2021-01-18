const { extractMessages, sendMessages, getUsers } = require('./utils');

let messages = [];
const userId = "70021520";

async function analyzeCommits(pluginConfig, context) {
  const { logger, commits } = context;
  messages = extractMessages(commits);

  logger.log(`Found ${messages.length} Telegram message`);
  console.log(messages);

  if (messages.length > 0) {
    const users = await getUsers();
    console.log(users);
    sendMessages(messages, [userId]);
  }
}

function success(pluginConfig, context) {
  console.log("success");
  console.log(context);
}

module.exports = { 
  analyzeCommits, 
  success
};