import BoardFilter from './BoardFilter'
import BoardList from './BoardList'
import BoardPages from './BoardPages'
import { useEffect, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import LeaderboardContext from '../../../../store/leaderboard-context'

const BoardContent = () => {
    const { onChangePath } = useContext(LeaderboardContext)
    const { pathname } = useLocation()

    useEffect(() => {
        onChangePath(pathname)
    }, [pathname, onChangePath])

    return <div className='mx-0'>
        <BoardFilter />
        <BoardList />
        <BoardPages />
    </div>
}

export default BoardContent