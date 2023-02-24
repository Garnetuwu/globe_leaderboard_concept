import FilterButton from "../../../UI/FilterButton"
import { useContext, useState } from "react"
import LeaderboardContext from "../../../../store/leaderboard-context"

const BoardFilterItem = (props) => {
    const { onChangeSort, sortName } = useContext(LeaderboardContext)
    const buttonClickHandler = () => {
        onChangeSort(props.title)
        console.log(sortName)
    }
    return (
        <FilterButton
            onClick={buttonClickHandler}
            highlited={sortName === props.title}
            className={props.title === 'Rank' ? 'w-[70%] justify-self-start' : ''}>
            <div className="hidden xl:inline-block"> {props.title} </div>
            <div className="inline-block xl:hidden"> {props.short} </div>
        </FilterButton>
    )
}

export default BoardFilterItem