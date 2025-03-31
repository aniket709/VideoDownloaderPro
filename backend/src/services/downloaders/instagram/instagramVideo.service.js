// backend/src/services/downloaders/instagram/instagramVideo.service.js
import BaseDownloader from '../baseDownloader.js';
import youtubedl from 'youtube-dl-exec';
import path from 'path';
import logger from '../../../utils/logger.js';

export default class InstagramVideoService extends BaseDownloader {
    async download() {
        const outputPath = path.join(this.outputDir, `instagram_video_${Date.now()}.mp4`);
        logger.info(`Attempting to download Instagram video to: ${outputPath}`);
        try {
            await youtubedl(this.url, {
                output: outputPath,
                format: 'bestvideo+bestaudio',
                mergeOutputFormat: 'mp4',
                noCheckCertificate: true,
                retries: 3
            });
            return { success: true, filePath: outputPath };
        } catch (error) {
            logger.error(`Instagram video download error: ${error.message}`);
            throw error;
        }
    }
}