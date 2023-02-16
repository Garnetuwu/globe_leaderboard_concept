import FilterButton from "../../../UI/FilterButton"

const BoardFilterItem = (props) => {
    const buttonClickHandler = () => {
        props.onClick(props.title)
    }
    return (
        <FilterButton onClick={buttonClickHandler} highlited={props.filter === props.title}>
            {props.title}
        </FilterButton>
    )
}

export default BoardFilterItem