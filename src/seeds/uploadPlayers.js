import generatePlayers from "./players.js"
import axios from 'axios'



const players = generatePlayers(50)

const uploadPlayers = () => {
    players.map(async (player) => {
        try {
            await axios({
                method: 'post',
                url: process.env.VITE_FIREBASE_URL,
                data: player
            })
        } catch (err) {
            console.log(err)
        }
    })
    console.log('success')
}

uploadPlayers()