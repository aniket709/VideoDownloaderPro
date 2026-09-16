// backend/src/config/index.js
import 'dotenv/config';

export default {
    PORT: process.env.PORT || 3001,
    DOWNLOAD_DIR: process.env.DOWNLOAD_DIR || `${process.env.HOME || process.env.USERPROFILE}/Downloads`
};