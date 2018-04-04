const express = require('express');
const { logErrors, clientErrorHandler, errorHandler } = require('./server/errorHandlers');
const coinDeskRouter = require('./server/routers/coinDesk');

const PORT = process.env.CRYPTO_CHART_PORT || 5555;

const app = express();

app.use(express.static('public'));

app.use('/coinDesk', coinDeskRouter);

app.use(logErrors);
app.use(clientErrorHandler);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`App listening on ${PORT}`);
});
