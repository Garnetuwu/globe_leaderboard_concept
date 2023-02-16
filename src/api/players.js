import axios from "axios";

export const getPlayers = async () => {
    try {
        const res = await axios('https://gamification-trading-default-rtdb.firebaseio.com/players.json')
        return res.data
    } catch (err) {
        console.log(err)
    }
}