// // // backend/src/services/downloaders/youtube/youtubeVideo.service.js
// // import BaseDownloader from '../baseDownloader.js';
// // import youtubedl from 'youtube-dl-exec';
// // import path from 'path';

// // export default class YoutubeVideoService extends BaseDownloader {
// //     async download() {
// //         console.log("YouTube URL received:", this.url);
// //         const outputPath = path.join(this.outputDir, `youtube_video_${Date.now()}.mp4`);
// //         await youtubedl(this.url, {
// //             output: outputPath,
// //             format: "bv*+ba/b",
// //             addHeader: ["referer:youtube.com"],
// //             extractorArgs: "youtube:player_client=android",
// //             mergeOutputFormat: 'mp4'
// //         });
// //         return { success: true, filePath: outputPath };
// //     }
// // }

// import BaseDownloader from '../baseDownloader.js';
// import youtubedl from 'youtube-dl-exec';
// import path from 'path';

// export default class YoutubeVideoService extends BaseDownloader {
//     async download() {
//         console.log("YouTube URL received:", this.url);

//         const outputPath = path.join(
//             this.outputDir,
//             `youtube_video_${Date.now()}.mp4`
//         );

//         await youtubedl(this.url, {
//             output: outputPath,
//             format: "bv*+ba/b",
//             addHeader: ["referer:youtube.com"],
//             mergeOutputFormat: 'mp4'
//         });

//         return {
//             success: true,
//             filePath: outputPath
//         };
//     }
// }

import BaseDownloader from '../baseDownloader.js';
import youtubedl from 'youtube-dl-exec';
import path from 'path';
import fs from 'fs';
import os from 'os';

export default class YoutubeVideoService extends BaseDownloader {
    async download() {
        console.log("YouTube URL received:", this.url);

        const outputPath = path.join(
            this.outputDir,
            `youtube_video_${Date.now()}.mp4`
        );

        // Create cookies file from Render environment variable
        const cookiePath = path.join(
            os.tmpdir(),
            'youtube-cookies.txt'
        );

        if (!process.env.YTDLP_COOKIES_B64) {
            throw new Error('YTDLP_COOKIES_B64 is not configured');
        }

        const cookies = Buffer
            .from(process.env.YTDLP_COOKIES_B64, 'base64')
            .toString('utf8');

        fs.writeFileSync(cookiePath, cookies, {
            mode: 0o600
        });

        console.log("YouTube cookies file created");

        await youtubedl(this.url, {
            output: outputPath,
            format: "bv*+ba/b",
            cookies: cookiePath,
            addHeader: ["referer:youtube.com"],
            extractorArgs: "youtube:player_client=android",
            mergeOutputFormat: "mp4"
        });

        return {
            success: true,
            filePath: outputPath
        };
    }
}