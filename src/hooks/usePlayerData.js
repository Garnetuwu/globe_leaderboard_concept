import { getPlayers } from "../api/players"
import { useCallback, useState } from "react"
import sortPlayers from "../utils/sortPlayers"

const usePlayerData = (pathFilter, sortName) => {
    const [playersData, setPlayersData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const fetchPlayers = useCallback(async () => {
        let playerList = []
        setIsLoading(true)
        const data = await getPlayers(pathFilter)
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
            setIsLoading(false)
            setPlayersData(sortPlayers(playerList, sortName))
        }
    }, [pathFilter, sortName])

    return {
        playersData,
        isLoading,
        fetchPlayers,
    }
}

export default usePlayerData