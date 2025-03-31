// backend/src/routes/youtubeRoutes.js
import express from 'express';
import YoutubeController from '../controllers/youtubeController.js';
import validateRequest from '../middleware/validateRequest.js';

const router = express.Router();

router.post('/download/video', validateRequest, YoutubeController.downloadVideo);
router.post('/download/audio', validateRequest, YoutubeController.downloadAudio);

export default router;