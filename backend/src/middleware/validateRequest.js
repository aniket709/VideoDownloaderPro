// backend/src/middleware/validateRequest.js
export default function validateRequest(req, res, next) {
  const { url } = req.body;
  if (!url || typeof url !== 'string') {
      return res.status(400).json({
          success: false,
          error: 'URL is required and must be a string'
      });
  }
  next();
}