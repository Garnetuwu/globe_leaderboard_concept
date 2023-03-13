import axios from "axios";

export const getPlayers = async (query) => {
  try {
    const res = await axios(process.env.VITE_FIREBASE_URL);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
