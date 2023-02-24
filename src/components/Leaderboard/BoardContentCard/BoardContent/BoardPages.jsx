import { useContext } from "react"
import LeaderboardContext from "../../../../store/leaderboard-context"

const BoardPages = () => {
    const { totalPageCount, currentPageNumber, paginate, onChangeRows, prevPage, nextPage } = useContext(LeaderboardContext)
    let totalPageNumbers = []
    if (totalPageCount) {
        for (let i = 1; i <= totalPageCount; i++) {
            totalPageNumbers.push(i)
        }
    }

    const optionChangeHandler = (e) => {
        console.log(e.target.value)
        onChangeRows(e.target.value)
    }


    return <div className="flex justify-between items-center text-sm text-caption mt-5 ">
        <div className="py-3">
            <label htmlFor="postsNum"> Rows per page: </label>
            <select id='postsNum' className="bg-transparent" onChange={optionChangeHandler}>
                <option value='20'> 20 </option>
                <option value='25'> 25 </option>
                <option value='30'> 30 </option>
                <option value='35'> 35 </option>
                <option value='40'> 40 </option>
            </select>
        </div>
        <div className="flex justify-between items-center">
            <button
                disabled={!prevPage}
                className='p-3 border-b-[2px] border-transparent'
                onClick={() => paginate(prevPage)}
            >
                <svg width="5" height="11" viewBox="0 0 5 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M5 0.5L5 10.5L-2.18557e-07 5.5L5 0.5Z" fill={prevPage ? '#93A2AE' : '#363636'} />
                </svg>
            </button>

            {totalPageNumbers.map(number => (
                <button
                    className={number === currentPageNumber ? 'border-b-[2px] border-selected p-3' : 'p-3 border-b-[2px] border-transparent rounded-md hover:bg-break'}
                    key={number}
                    onClick={() => paginate(number)}
                >
                    {number}
                </button>
            ))}
            <button
                disabled={!nextPage}
                className='p-3 border-b-[2px] border-transparent'
                onClick={() => paginate(nextPage)}
            >
                <svg width="5" height="11" viewBox="0 0 5 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0 10.5L-4.37113e-07 0.5L5 5.5L0 10.5Z" fill={nextPage ? '#93A2AE' : '#363636'} />
                </svg>
            </button>
        </div>
    </div>
}

export default BoardPages