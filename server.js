const express = require('express');

const PORT = process.env.CRYPTO_CHART_PORT || 5555;

const app = express();

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`App listening on ${PORT}`);
});
