const express = require('express');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const { logErrors, clientErrorHandler, errorHandler } = require('./server/errorHandlers');
const coinDeskRouter = require('./server/routers/coinDesk');

const PORT = process.env.CRYPTO_CHART_PORT || 5555;

const app = express();

app.use(morgan('dev'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/coindesk', coinDeskRouter);

app.use(logErrors);
app.use(clientErrorHandler);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`App listening on ${PORT}`);
});
