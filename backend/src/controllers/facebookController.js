// backend/src/controllers/facebookController.js
import DownloadManager from '../services/downloadManager.js';

export default class FacebookController {
    static async downloadVideo(req, res, next) {
        try {
            const { url } = req.body;
            const downloadManager = new DownloadManager('facebook', 'video', url);
            const result = await downloadManager.download();
            res.json(result);
        } catch (error) {
            next(error);
        }
    }

    static async downloadAudio(req, res, next) {
        try {
            const { url } = req.body;
            const downloadManager = new DownloadManager('facebook', 'audio', url);
            const result = await downloadManager.download();
            res.json(result);
        } catch (error) {
            next(error);
        }
    }
}


