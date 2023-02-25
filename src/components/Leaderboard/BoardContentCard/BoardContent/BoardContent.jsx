import BoardFilter from './BoardFilter'
import BoardList from './BoardList'
import BoardPages from './BoardPages'
import PlayerModal from './PlayerModal'
import { useEffect, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import LeaderboardContext from '../../../../store/leaderboard-context'
import { AnimatePresence, motion } from 'framer-motion'

const BoardContent = () => {
    const { onChangePath, isModalVisible } = useContext(LeaderboardContext)
    const { pathname } = useLocation()

    useEffect(() => {
        onChangePath(pathname)
    }, [pathname, onChangePath])

    return <div className='mx-0'>
        <BoardFilter />
        <BoardList />
        <BoardPages />
        <PlayerModal />
    </div>
}

export default BoardContent