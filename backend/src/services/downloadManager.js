// backend/src/services/downloadManager.js
import config from '../config/index.js';
import FacebookVideoService from './downloaders/facebook/facebookVideo.service.js';
import FacebookAudioService from './downloaders/facebook/facebookAudio.service.js';
import InstagramVideoService from './downloaders/instagram/instagramVideo.service.js';
import InstagramAudioService from './downloaders/instagram/instagramAudio.service.js';
import YoutubeVideoService from './downloaders/youtube/youtubeVideo.service.js';
import YoutubeAudioService from './downloaders/youtube/youtubeAudio.service.js';

export default class DownloadManager {
    constructor(platform, type, url) {
        this.platform = platform;
        this.type = type;
        this.url = url;
    }

    async download() {
        let downloader;
        switch (this.platform) {
            case 'facebook':
                downloader = this.type === 'video' 
                    ? new FacebookVideoService(this.url, config.DOWNLOAD_DIR)
                    : new FacebookAudioService(this.url, config.DOWNLOAD_DIR);
                break;
            case 'instagram':
                downloader = this.type === 'video'
                    ? new InstagramVideoService(this.url, config.DOWNLOAD_DIR)
                    : new InstagramAudioService(this.url, config.DOWNLOAD_DIR);
                break;
            case 'youtube':
                downloader = this.type === 'video'
                    ? new YoutubeVideoService(this.url, config.DOWNLOAD_DIR)
                    : new YoutubeAudioService(this.url, config.DOWNLOAD_DIR);
                break;
            default:
                throw new Error('Unsupported platform');
        }
        return await downloader.download();
    }
}


