// backend/src/controllers/instagramController.js
import DownloadManager from '../services/downloadManager.js';

export default class InstagramController {
    static async downloadVideo(req, res, next) {
        try {
            const { url } = req.body;
            const downloadManager = new DownloadManager('instagram', 'video', url);
            const result = await downloadManager.download();
            res.json(result);
        } catch (error) {
            next(error);
        }
    }

    static async downloadAudio(req, res, next) {
        try {
            const { url } = req.body;
            const downloadManager = new DownloadManager('instagram', 'audio', url);
            const result = await downloadManager.download();
            res.json(result);
        } catch (error) {
            next(error);
        }
    }
}