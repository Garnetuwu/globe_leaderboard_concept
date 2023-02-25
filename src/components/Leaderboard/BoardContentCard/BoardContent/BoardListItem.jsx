import { useContext } from "react"
import LeaderboardContext from "../../../../store/leaderboard-context"
import GridRow from "../../../UI/GridRow"
import playerIcon from '../../../../assets/common/player icon 2.png'


const itemCard = 'bg-card-background flex items-center py-2 h-[2.5em]'

const BoardListItem = (props) => {
    const { currentPageNumber, onOpenModal } = useContext(LeaderboardContext)
    const top3 = props.index <= 2 && currentPageNumber === 1

    const buttonClickHandler = () => {
        onOpenModal(props.tid)
    }

    return (
        <>
            <GridRow className={`${top3 ? 'text-md' : 'text-sm'}`}>
                <div className={`${top3 ? 'text-lg' : 'text-md'} ${itemCard} justify-center w-[70%] rounded-md justify-self-start`}>
                    {`#${props.rank}`}
                </div>
                <div className={`${itemCard} rounded-l-md w-[100%] justify-center`}>
                    <span className="max-lg:hidden"> W/R </span>
                    <span className="text-green">{`${props.winRate}%`}</span>
                </div>
                <div className={`${itemCard} w-[100%] justify-center `}>
                    <span className="max-lg:hidden"> P/L </span>
                    <span className="text-green">{`$${props.pl}`}</span>
                </div>
                <div className={`${itemCard} w-[100%] justify-center `}>
                    <span className="max-lg:hidden">V/T</span>
                    <span className="text-green">{`$${props.volume}`}</span>
                </div>
                <div className={`${itemCard} w-[100%] justify-center `}>{props.rating}</div>
                <div className={`${itemCard} rounded-r-md w-[100%] justify-between pl-5`}>
                    <span></span>
                    <span className='my-auto'> {props.name} </span>
                    <button onClick={buttonClickHandler}>
                        <img className="object-fit scale-75 m-0" src={playerIcon} alt='playerIcon' />
                    </button>
                </div>
            </GridRow>
            {props.index === 2 && currentPageNumber === 1 && <div className="bg-break w-[100%] h-[5px] rounded-sm" />}
        </>
    )
}

export default BoardListItem