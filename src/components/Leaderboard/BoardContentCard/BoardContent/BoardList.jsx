import BoardListItem from "./BoardListItem"
import { useContext } from "react"
import LeaderboardContext from "../../../../store/leaderboard-context"

const BoardList = () => {
    const { playersData, isLoading } = useContext(LeaderboardContext)

    return <div>
        {isLoading && <p>Loading...</p>}
        {!isLoading && playersData && playersData.map(player => (
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
        {!playersData && <p className="text-center p-10">TBC</p>}
    </div>
}
export default BoardList