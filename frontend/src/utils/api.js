// src/utils/api.js
const API_BASE_URL = 'https://reelsdownloader-47mb.onrender.com/'; // Match your backend port

export const downloadFromPlatform = async (platform, url, type = 'video') => {
  const endpoint = `${API_BASE_URL}/api/${platform}?url=${encodeURIComponent(url)}&type=${type}`;
  
  const response = await fetch(endpoint, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Download failed');
  }

  return await response.json();
};