// backend/src/utils/execHelpers.js
import { exec } from 'child_process';

export async function executeCommand(command) {
    return new Promise((resolve, reject) => {
        exec(command, (error, stdout, stderr) => {
            if (error) reject(error);
            resolve(stdout || stderr);
        });
    });
}