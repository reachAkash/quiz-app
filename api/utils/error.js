function errorHandler(statusCode, err) {
  const error = new Error();
  error.statusCode = statusCode;
  error.message = err;
  return error;
}

module.exports = { errorHandler };
