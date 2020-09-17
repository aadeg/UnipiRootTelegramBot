const TelegramServer = require('telegram-test-api');
const assert = require('assert');
const Bot = require('../src/bot');
const messages = require('../src/messages');

function sleep (ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

describe('Telegram bot test', () => {
  let serverConfig = { port: 9001 };
  const token = "test_token";

  const testsData = [
    {command: "/start", expectedMessage: messages.start},
    {command: "/faq", expectedMessage: messages.faq},
    {command: "/list", expectedMessage: messages.list},
    {command: "/informatica", expectedMessage: messages.informatica},
  ];

  let server;
  let client;
  let botInstance;
  
  beforeEach(async () => {
    server = new TelegramServer(serverConfig);
    await server.start();
    client = server.getClient(token, { timeout: 5000 });
    botInstance = new Bot(token, { telegram: { apiRoot: server.ApiURL } });
    botInstance.startPolling();
  });


  afterEach(async () => {
    await botInstance.stop();
    await sleep(50);
    await server.stop();
  });

  async function testCommand(command, expectedMessage) {
    const commandMsg = client.makeCommand(command);
    const res = await client.sendCommand(commandMsg);
    assert.equal(res.ok, true)

    const updates = await client.getUpdates();
    assert.equal(updates.ok, true);
    assert.equal(updates.result.length, 1);
    const { message } = updates.result[0];
    assert.equal(message.text, expectedMessage);
  }
  
  testsData.forEach(({command, expectedMessage}) => {
    it(`${command} command message`, async () => {
      await testCommand(command, expectedMessage);
    });
  });
})