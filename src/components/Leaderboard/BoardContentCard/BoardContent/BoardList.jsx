import BoardListItem from "./BoardListItem"
import { useState, useEffect } from "react"
import { getPlayers } from "../../../../api/players"

const sortPlayers = (list, filter) => {
    return list.sort((a, b) => {
        if (filter === 'Ranking') {
            return a.rank - b.rank
        }
        if (filter === 'Win Rate') {
            return b.winRate - a.winRate
        }
        if (filter === 'Profit and Loss') {
            return b.pl - a.pl
        }
        if (filter === 'Volume Traded') {
            return b.volume - a.volume
        }
        return b.rating - a.rating
    })
}

const BoardList = (props) => {
    const [dummyPlayers, setDummyPlayers] = useState([])
    const { location, filter } = props
    useEffect(() => {
        if (location === '/leaderboard/current-season') {
            let playerList = []
            const fetch = async () => {
                const data = await getPlayers()
                if (data) {
                    for (let key in data) {
                        const playerData = {
                            key: key,
                            tid: data[key].tid,
                            name: data[key].name,
                            volume: data[key].volume,
                            level: data[key].level,
                            rank: data[key].rank,
                            pl: data[key].pl,
                            winRate: data[key].winRate,
                            rating: data[key].rating
                        }
                        playerList.push(playerData)
                    }
                }
                setDummyPlayers(sortPlayers(playerList, filter))
            }
            fetch()
        }
        setDummyPlayers([])
    }, [location, getPlayers, sortPlayers, filter])

    return <div>
        {dummyPlayers.map(player => (
            <BoardListItem
                key={player.key}
                tid={player.tid}
                name={player.name}
                volume={player.volume}
                level={player.level}
                rank={player.rank}
                pl={player.pl}
                winRate={player.winRate}
                rating={player.rating}
            />
        ))}
    </div>
}
export default BoardList