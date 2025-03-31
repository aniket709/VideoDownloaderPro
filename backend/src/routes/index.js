// backend/src/routes/index.js
import express from 'express';
import facebookRoutes from './facebookRoutes.js';
import instagramRoutes from './instagramRoutes.js';
import youtubeRoutes from './youtubeRoutes.js';

const router = express.Router();



router.use('/facebook', facebookRoutes);
router.use('/instagram', instagramRoutes);
router.use('/youtube', youtubeRoutes);

export default router;