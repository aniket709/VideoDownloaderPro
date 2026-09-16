import { execFile } from "child_process";
import { promisify } from "util";

const execFileAsync = promisify(execFile);

try {
    const { stdout, stderr } = await execFileAsync(
        "./node_modules/youtube-dl-exec/bin/yt-dlp",
        [
            "--verbose",
            "--dump-single-json",
            "--skip-download",
            "https://www.youtube.com/watch?v=oaZmZRtNF5Y"
        ]
    );

    console.log("STDOUT:");
    console.log(stdout);

    console.log("STDERR:");
    console.log(stderr);

} catch (error) {
    console.error("YT-DLP TEST FAILED:");
    console.error(error.stderr || error.message);
}