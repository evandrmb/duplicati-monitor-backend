const logger = require('../../utils');

module.exports = function errorHandler(error, request, response, next) {
  logger.error(error);

  response.sendStatus(500);
};
