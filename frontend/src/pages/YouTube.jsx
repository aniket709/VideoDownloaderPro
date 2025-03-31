// import React, { useState } from 'react';
// import '../styles/YouTube.css';
// const YouTube = () => {
//   const [url, setUrl] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const handleDownload = async (type) => {
//     try {
//       setIsLoading(true);
//       setError(null);

//       const endpoint = `http://localhost:3000/api/youtube/download/${type}`;
//       const response = await fetch(endpoint, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ url }),
//       });

//       if (!response.ok) {
//         const errorData = await response.json().catch(() => ({}));
//         throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
//       }

//       const data = await response.json();
//       if (!data.filePath) throw new Error("Invalid file path received");

//       // Create a link to download the file
//       const downloadLink = `http://localhost:3000/downloads/${data.filePath.split('/').pop()}`;
//       window.location.href = downloadLink; // Start the download

//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="youtube-container">  {/* Added class for styling */}
//       <h1>YouTube Video & Audio Downloader</h1>
//       <input 
//         type="text" 
//         value={url} 
//         onChange={(e) => setUrl(e.target.value)} 
//         placeholder="Enter YouTube URL"
//       />
//       <div>
//         <button 
//           onClick={() => handleDownload('video')} 
//           disabled={isLoading}
//         >
//           {isLoading ? 'Downloading Video...' : 'Download Video'}
//         </button>
//         <button 
//           onClick={() => handleDownload('audio')} 
//           disabled={isLoading}
//         >
//           {isLoading ? 'Downloading Audio...' : 'Download Audio'}
//         </button>
//       </div>
//       {error && <p>Error: {error}</p>}
//     </div>
//   );
// }
// export default YouTube;

import React, { useState } from 'react';
import '../styles/YouTube.css';

const YouTube = () => {
  const [url, setUrl] = useState('');
  const [isLoadingVideo, setIsLoadingVideo] = useState(false);
  const [isLoadingAudio, setIsLoadingAudio] = useState(false);
  const [error, setError] = useState(null);

  const handleDownload = async (type) => {
    try {
      if (type === 'video') setIsLoadingVideo(true);
      if (type === 'audio') setIsLoadingAudio(true);
      setError(null);

      const endpoint = `http://localhost:3000/api/youtube/download/${type}`;
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

      // Create a link to download the file
      const downloadLink = `http://localhost:3000/downloads/${data.filePath.split('/').pop()}`;
      window.location.href = downloadLink; // Start the download

    } catch (err) {
      setError(err.message);
    } finally {
      if (type === 'video') setIsLoadingVideo(false);
      if (type === 'audio') setIsLoadingAudio(false);
    }
  };

  return (
    <div className="youtube-container">
      <h1>YouTube Video & Audio Downloader</h1>
      
      {/* Input field centered */}
      <div className="input-container">
        <input 
          type="text" 
          value={url} 
          onChange={(e) => setUrl(e.target.value)} 
          placeholder="Enter YouTube URL"
        />
      </div>

      {/* Buttons styled */}
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

export default YouTube;

