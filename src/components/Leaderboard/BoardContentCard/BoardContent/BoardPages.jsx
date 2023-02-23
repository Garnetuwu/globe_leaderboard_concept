import { useContext } from "react"
import LeaderboardContext from "../../../../store/leaderboard-context"

const BoardPages = () => {
    const { totalPageCount, currentPageNumber, paginate, onChangeRows } = useContext(LeaderboardContext)
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


    return <div className="flex justify-between items-center text-sm text-caption mt-5">
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
        <div>
            {totalPageNumbers.map(number => (
                <button
                    className={number === currentPageNumber ? 'border-b-[2px] border-selected p-3' : 'p-3 rounded-md hover:bg-break'}
                    key={number}
                    onClick={() => paginate(number)}
                >
                    {number}
                </button>
            ))}
        </div>

    </div>
}

export default BoardPages