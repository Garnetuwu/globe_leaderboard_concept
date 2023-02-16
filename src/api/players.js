import axios from "axios";

export const getPlayers = async () => {
    try {
        const res = await axios(import.meta.env.VITE_FIREBASE_URL)
        return res.data
    } catch (err) {
        console.log(err)
    }
}