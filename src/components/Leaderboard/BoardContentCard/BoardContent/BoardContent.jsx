import BoardFilter from './BoardFilter'
import BoardList from './BoardList'
import BoardPages from './BoardPages'
import { useLocation } from 'react-router-dom'

const BoardContent = () => {
    const location = useLocation()
    console.log(location.pathname)

    return <div className='mx-[56px]'>
        <BoardFilter />
        <BoardList />
        <BoardPages />
    </div>
}

export default BoardContent