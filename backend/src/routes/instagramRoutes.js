// backend/src/routes/instagramRoutes.js
import express from 'express';
import InstagramController from '../controllers/instagramController.js';
import validateRequest from '../middleware/validateRequest.js';

const router = express.Router();

router.post('/download/video', validateRequest, InstagramController.downloadVideo);
router.post('/download/audio', validateRequest, InstagramController.downloadAudio);

export default router;