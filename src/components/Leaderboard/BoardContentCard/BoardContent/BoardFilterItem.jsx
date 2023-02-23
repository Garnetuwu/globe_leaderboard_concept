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
        <FilterButton onClick={buttonClickHandler} highlited={sortName === props.title}>
            <span className="hidden xl:block"> {props.title} </span>
            <span className="block xl:hidden"> {props.short} </span>
        </FilterButton>
    )
}

export default BoardFilterItem