// backend/src/services/downloaders/facebook/facebookVideo.service.js
import BaseDownloader from '../baseDownloader.js';
import youtubedl from 'youtube-dl-exec';
import path from 'path';

export default class FacebookVideoService extends BaseDownloader {
    async download() {
        const outputPath = path.join(this.outputDir, `facebook_video_${Date.now()}.mp4`);
        console.log (outputPath)
        await youtubedl(this.url, {
            output: outputPath,
            format: 'bestvideo+bestaudio',
            mergeOutputFormat: 'mp4'
        });
        return { success: true, filePath: outputPath };
    }
}