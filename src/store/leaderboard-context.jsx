import React, { useState, useEffect } from "react";
import sortPlayers from '../utils/sortPlayers.js'
import { getPlayers } from '../api/players.js'

const LeaderboardContext = React.createContext({
    onChangePath: (inputPath) => { },
    onChangeSort: (inputSort) => { },
    playersData: [],
    sortName: ''
})

export default LeaderboardContext

export const LeaderboardContextProvider = ({ children }) => {
    const [playersData, setPlayersData] = useState(null)
    const [path, setPath] = useState('/leaderboard/current-season')
    const [sortName, setSortName] = useState('Rank')

    const changePathHandler = (inputPath) => {
        setPath(inputPath)
    }

    const changeSortHandler = (inputSort) => {
        setSortName(inputSort)
    }

    useEffect(() => {
        let playersArr = []
        const fetchData = async () => {
            const data = await getPlayers(path)
            if (data) {
                for (let key in data) {
                    const player = data[key]
                    const playerData = {
                        key: player.key,
                        tid: player.tid,
                        name: player.name,
                        volume: player.volume,
                        level: player.level,
                        rank: player.rank,
                        pl: player.pl,
                        winRate: player.winRate,
                        rating: player.rating
                    }
                    playersArr.push(playerData)
                }
                setPlayersData(sortPlayers(playersArr, sortName))
            }
        }
        fetchData()
    }, [sortName, path])

    const leaderboardContext = {
        onChangePath: changePathHandler,
        onChangeSort: changeSortHandler,
        playersData,
        sortName,
    }
    return <LeaderboardContext.Provider value={leaderboardContext}>
        {children}
    </LeaderboardContext.Provider>
}