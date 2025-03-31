
import React, { useState } from 'react';
import '../styles/Facebook.css'; // Use CSS Module for scoped styles

const Facebook = () => {
  const [url, setUrl] = useState('');
  const [isLoadingVideo, setIsLoadingVideo] = useState(false);
  const [isLoadingAudio, setIsLoadingAudio] = useState(false);
  const [error, setError] = useState(null);

  const handleDownload = async (type) => {
    try {
      type === 'video' ? setIsLoadingVideo(true) : setIsLoadingAudio(true);
      setError(null);

      const endpoint = `http://localhost:3000/api/facebook/download/${type}`;
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      if (!data.filePath) throw new Error("Invalid file path received");

      const downloadLink = `http://localhost:3000/downloads/${data.filePath.split('/').pop()}`;
      window.location.href = downloadLink;

    } catch (err) {
      setError(err.message);
    } finally {
      type === 'video' ? setIsLoadingVideo(false) : setIsLoadingAudio(false);
    }
  };

  return (
    <div className="facebook-container">
      <h1>Facebook Video & Audio Downloader</h1>
      
      <div className="input-container">
        <input 
          type="text" 
          value={url} 
          onChange={(e) => setUrl(e.target.value)} 
          placeholder="Enter Facebook URL"
        />
      </div>

      <div className="button-container">
        <button 
          className="download-button"
          onClick={() => handleDownload('video')} 
          disabled={isLoadingVideo}
        >
          {isLoadingVideo ? 'Downloading Video...' : 'Download Video'}
        </button>
        <button 
          className="download-button"
          onClick={() => handleDownload('audio')} 
          disabled={isLoadingAudio}
        >
          {isLoadingAudio ? 'Downloading Audio...' : 'Download Audio'}
        </button>
      </div>
      
      {error && <p className="error-message">Error: {error}</p>}
    </div>
  );
};

export default Facebook;