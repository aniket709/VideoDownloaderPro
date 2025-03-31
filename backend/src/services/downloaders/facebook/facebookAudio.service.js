// backend/src/services/downloaders/facebook/facebookAudio.service.js
import BaseDownloader from '../baseDownloader.js';
import youtubedl from 'youtube-dl-exec';
import path from 'path';

export default class FacebookAudioService extends BaseDownloader {
    async download() {
        const outputPath = path.join(this.outputDir, `facebook_audio_${Date.now()}.mp3`);
        await youtubedl(this.url, {
            output: outputPath,
            extractAudio: true,
            audioFormat: 'mp3'
        });
        return { success: true, filePath: outputPath };
    }
}