const SemanticReleaseError = require('@semantic-release/error');
const AggregateError = require('aggregate-error');

function verifyConditions(pluginConfig, context) {
  const { logger } = context;
  logger.asd("test");
  console.error("verifyConditions");
}

module.exports = {
  verifyConditions,
};