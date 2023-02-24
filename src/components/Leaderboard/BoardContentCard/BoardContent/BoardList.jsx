import BoardListItem from "./BoardListItem"
import { useContext } from "react"
import LeaderboardContext from "../../../../store/leaderboard-context"

const BoardList = () => {
    const { playersData, currentPlayers } = useContext(LeaderboardContext)

    return <div>
        {playersData && currentPlayers.map((player, index) => (
            <BoardListItem
                key={player.key}
                index={index}
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
        {!playersData && <p className="text-center p-10">TBC</p>}
    </div>
}
export default BoardList