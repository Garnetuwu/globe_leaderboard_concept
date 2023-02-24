import React, { useState, useEffect } from "react";
import { getPlayers } from '../api/players.js'
import sortPlayers from "../utils/sortPlayers.js";

const LeaderboardContext = React.createContext({
    onChangePath: (inputPath) => { },
    onChangeSort: (inputSort) => { },
    playersData: [],
    sortName: '',
    currentPlayers: [],
    totalPageCount: 1,
    currentPageNumber: 1,
    nextPage: 1,
    prevPage: 1,
    paginate: (currentPage) => { }
})

export default LeaderboardContext

export const LeaderboardContextProvider = ({ children }) => {
    //player data state
    const [playersData, setPlayersData] = useState([])
    const [path, setPath] = useState('/leaderboard/current-season')
    const [sortName, setSortName] = useState('Rank')
    const sortedPlayers = sortPlayers(playersData, sortName)

    //page state
    const [currentPageNumber, setCurrentPageNumber] = useState(1)
    const [rowsPerPage, setRowsPerPage] = useState(20)


    const indexOfLastPlayer = currentPageNumber * rowsPerPage
    const indexOfFirstPlayer = indexOfLastPlayer - rowsPerPage

    const currentPlayers = sortedPlayers.slice(indexOfFirstPlayer, indexOfLastPlayer)
    const totalPageCount = Math.ceil(sortedPlayers.length / rowsPerPage)

    let prevPage;
    let nextPage;

    if (currentPageNumber > 1) {
        prevPage = currentPageNumber - 1
    }

    if (currentPageNumber < totalPageCount) {
        nextPage = currentPageNumber + 1
    }


    const paginate = (currPage) => {
        setCurrentPageNumber(currPage)
    }

    const onChangeRows = (rows) => {
        setRowsPerPage(rows)
    }

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
                        key,
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
                setPlayersData(playersArr)
            }
        }
        fetchData()
    }, [])



    const leaderboardContext = {
        onChangePath: changePathHandler,
        onChangeSort: changeSortHandler,
        playersData,
        sortName,
        currentPlayers,
        totalPageCount,
        paginate,
        currentPageNumber,
        onChangeRows,
        prevPage,
        nextPage
    }
    return <LeaderboardContext.Provider value={leaderboardContext}>
        {children}
    </LeaderboardContext.Provider>
}