// backend/src/middleware/errorHandler.js
export default function errorHandler(err, req, res, next) {
  console.error(err.stack);
  res.status(err.status || 500).json({
      success: false,
      error: err.message || 'Server Error'
  });
}