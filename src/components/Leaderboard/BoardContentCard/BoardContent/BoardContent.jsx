import BoardFilter from './BoardFilter'
import BoardList from './BoardList'
import BoardPages from './BoardPages'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const BoardContent = () => {
    const location = useLocation()
    const pathname = location.pathname
    const [curLocation, setCurLocation] = useState('')
    const [filter, setFilter] = useState('Ranking')

    useEffect(() => {
        setCurLocation(pathname)
    }, [pathname, curLocation])

    const sortChangeHandler = (filter) => {
        setFilter(filter)
        console.log(filter)
    }

    return <div className='mx-0'>
        <BoardFilter onSort={sortChangeHandler} filter={filter} />
        <BoardList location={curLocation} filter={filter} />
        <BoardPages />
    </div>
}

export default BoardContent