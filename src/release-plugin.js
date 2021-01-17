const SemanticReleaseError = require('@semantic-release/error');
const AggregateError = require('aggregate-error');

function analyzeCommits(pluginConfig, context) {
  const { logger } = context;
  logger.log("analyzeCommits");
  throw new AggregateError(["errors"]);
}

module.exports = {
  analyzeCommits,
};