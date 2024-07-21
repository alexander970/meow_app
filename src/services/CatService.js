import axios from 'axios';

const fetchCat = async () => {
  try {
    const response = await axios.get('https://cataas.com/cat', {
      headers: { Accept: 'application/json' },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

const fetchCatImage = async (catId) => {
  try {
    const imageResponse = await axios.get(
      `https://cataas.com/cat/${catId}`,
      {
        headers: { Accept: 'image/*' },
        responseType: 'arraybuffer',
      }
    );

    const base64Image = arrayBufferToBase64(imageResponse.data);
    return base64Image;
  } catch (error) {
    throw error;
  }
};

// const fetchCatTag = async (catId) => {
//   try {
//     const response = await axios.get(`https://cataas.com/cat/:tag/${catId}`, {
//       headers: { Accept: 'application/json' },
//     });
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };



const arrayBufferToBase64 = (buffer) => {
  let binary = '';
  const bytes = new Uint8Array(buffer);
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
};

export { fetchCat, fetchCatImage};