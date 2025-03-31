// backend/src/controllers/youtubeController.js
import DownloadManager from '../services/downloadManager.js';

export default class YoutubeController {
    static async downloadVideo(req, res, next) {
        try {
            const { url } = req.body;
            const downloadManager = new DownloadManager('youtube', 'video', url);
            const result = await downloadManager.download();
            res.json(result);
        } catch (error) {
            next(error);
        }
    }

    static async downloadAudio(req, res, next) {
        try {
            const { url } = req.body;
            const downloadManager = new DownloadManager('youtube', 'audio', url);
            const result = await downloadManager.download();
            res.json(result);
        } catch (error) {
            next(error);
        }
    }
}