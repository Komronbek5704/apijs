import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/chat'; // URL to'g'ri ekanligiga ishonch hosil qiling

export const getChatResponse = async (message) => {
  try {
    const response = await axios.post(API_URL, { message });
    return response.data.reply;
  } catch (error) {
    console.error("API xatosi:", error); // Xatoni ko'rsatadi
    throw error;
  }
};
