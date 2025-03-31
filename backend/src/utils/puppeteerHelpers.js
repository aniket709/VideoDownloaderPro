// backend/src/utils/puppeteerHelpers.js
import puppeteer from 'puppeteer';

export async function getBrowserInstance() {
    return await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
}