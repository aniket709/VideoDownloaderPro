// import { useState } from "react";

// const useDownloader = () => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const download = async (platform, url, type = 'video') => {
//     try {
//       setIsLoading(true);
//       setError(null);

//       const endpoint = `http://localhost:3000/api/${platform}/download/${type}`;
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

//       return `http://localhost:3000/downloads/${data.filePath.split('/').pop()}`;
//     } catch (err) {
//       setError(err.message);
//       throw err;
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return { download, isLoading, error };
// };

// export default useDownloader;


import { useState } from "react";

const useDownloader = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const download = async (platform, url, type = 'video') => {
    try {
      setIsLoading(true);
      setError(null);

      // Set the endpoint based on the platform (Facebook, Instagram, YouTube)
      const endpoint = `http://localhost:3000/api/${platform}/download/${type}`;
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      });

      // Handle unsuccessful responses
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }

      // Handle successful response and extract file path
      const data = await response.json();
      if (!data.filePath) throw new Error("Invalid file path received");

      // Return the URL of the downloaded file
      return `http://localhost:3000/downloads/${data.filePath.split('/').pop()}`;
    } catch (err) {
      // Set error message in case of failure
      setError(err.message);
      throw err;
    } finally {
      // Reset loading state
      setIsLoading(false);
    }
  };

  return { download, isLoading, error };
};

export default useDownloader;
