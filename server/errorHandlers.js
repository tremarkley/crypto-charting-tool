const logErrors = function logErrors(err, req, res, next) {
  console.error(err.stack);
  next(err);
};

const clientErrorHandler = function clientErrorHandler(err, req, res, next) {
  if (req.xhr) {
    res.status(500).send({ error: 'Something failed!' });
  } else {
    next(err);
  }
};

const errorHandler = function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500);
  res.render('error', { error: err });
};

module.exports = {
  logErrors, clientErrorHandler, errorHandler,
};
