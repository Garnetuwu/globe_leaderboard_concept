import LayoutWrapper from "../components/Layout/LayoutWrapper"
import BoardOverview from "../components/Leaderboard/BoardOverview"
import BoardContentContainer from "../components/Leaderboard/BoardContentContainer"
import { LeaderboardContextProvider } from "../store/leaderboard-context"

const Leaderboard = () => {
    return (
        <LeaderboardContextProvider>
            <LayoutWrapper>
                <header className="ml-10 flex justify-between items-center gap-10">
                    <h1 className="text-4xl"> Leaderboard </h1>
                    <BoardOverview />
                </header>
                <BoardContentContainer />
            </LayoutWrapper>
        </LeaderboardContextProvider>
    )
}

export default Leaderboard