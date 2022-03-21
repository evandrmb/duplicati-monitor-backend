const express = require('express');
const logger = require('./utils');

require('express-async-errors');

const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);

app.use((error, request, response, next) => {
  logger.error(error);

  response.sendStatus(500);
});

app.listen(3000, () => logger.info('🔥 Server listening at http://localhost:3000'));
