// backend/src/services/downloaders/baseDownloader.js
export default class BaseDownloader {
  constructor(url, outputDir) {
      this.url = url;
      this.outputDir = outputDir;
  }

  async download() {
      throw new Error('Method not implemented');
  }
}