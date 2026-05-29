// backend/src/services/downloaders/youtube/youtubeVideo.service.js
import BaseDownloader from '../baseDownloader.js';
import youtubedl from 'youtube-dl-exec';
import path from 'path';

export default class YoutubeVideoService extends BaseDownloader {
    async download() {
        const outputPath = path.join(this.outputDir, `youtube_video_${Date.now()}.mp4`);
        await youtubedl(this.url, {
            output: outputPath,
            format: "bv*+ba/b",
            addHeader: ["referer:youtube.com"],
            extractorArgs: "youtube:player_client=android",
            mergeOutputFormat: 'mp4'
        });
        return { success: true, filePath: outputPath };
    }
}