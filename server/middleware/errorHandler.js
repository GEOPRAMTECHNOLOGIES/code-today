const notFound = (req, res, next) => {
  res.status(404).json({
    error: true,
    status: 404,
    message: 'Resource not found',
    path: req.originalUrl
  });
};

const errorHandler = (err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({
    error: true,
    status: err.status || 500,
    message: err.message || 'Internal server error',
    details: process.env.NODE_ENV === 'production' ? undefined : err.stack
  });
};

module.exports = {
  notFound,
  errorHandler
};
