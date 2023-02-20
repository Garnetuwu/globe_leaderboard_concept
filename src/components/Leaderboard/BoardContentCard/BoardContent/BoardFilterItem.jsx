import FilterButton from "../../../UI/FilterButton"

const BoardFilterItem = (props) => {
    const buttonClickHandler = () => {
        props.onClick(props.title)
    }
    return (
        <FilterButton onClick={buttonClickHandler} highlited={props.filter === props.title}>
            <span className="hidden xl:block"> {props.title} </span>
            <span className="block xl:hidden"> {props.short} </span>
        </FilterButton>
    )
}

export default BoardFilterItem