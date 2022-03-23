const express = require('express');
const logger = require('./utils');
require('express-async-errors');
const cors = require('./app/middlewares/cors');
const errorHandler = require('./app/middlewares/errorHandler');

const routes = require('./routes');

const app = express();

app.use(express.json());

app.use(cors);
app.use(routes);
const port = process.env.PORT;

app.use(errorHandler);

app.listen(port, () => logger.info(`🔥 Server listening at http://localhost:${port}`));
