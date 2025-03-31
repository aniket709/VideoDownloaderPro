// backend/src/utils/fileHelpers.js
import fs from 'fs/promises';

export async function ensureDir(dir) {
    try {
        await fs.mkdir(dir, { recursive: true });
    } catch (error) {
        if (error.code !== 'EEXIST') throw error;
    }
}