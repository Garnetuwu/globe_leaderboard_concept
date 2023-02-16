import { uniqueNamesGenerator, names } from "unique-names-generator"

let players = []

const randomize = (range) => {
    const value = Math.floor(Math.random() * range)
    return value
}

const generatePlayers = (playerNumber) => {
    for (let i = 0; i < playerNumber; i++) {
        const name = uniqueNamesGenerator({ dictionaries: [names] })
        const pl = randomize(2000) * 1000
        const volume = randomize(5000) * 1000
        const winRate = randomize(100)
        const rating = (volume + pl) * winRate / 100
        const level = randomize(500)
        const tid = randomize(60000) + 10000
        const player = {
            name,
            pl,
            volume,
            winRate,
            rating,
            level,
            tid,
        }
        players.push(player)
    }
    players.sort((a, b) => {
        if (a.rating > b.rating) {
            return -1
        }
        if (a.rating < b.rating) {
            return 1
        }
        return 0
    })
    players.map((player, index) => player.rank = index + 1)
    return players
}

export default generatePlayers