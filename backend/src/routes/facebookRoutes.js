// backend/src/routes/facebookRoutes.js
import express from 'express';
import FacebookController from '../controllers/facebookController.js';
import validateRequest from '../middleware/validateRequest.js';



const router = express.Router()

router.post('/download/video', validateRequest, FacebookController.downloadVideo);
router.post('/download/audio', validateRequest, FacebookController.downloadAudio);


export default router;

