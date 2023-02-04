
const FilterButton = (props) => {
    return <button className="flex items-center gap-3">
        <span>{props.children}</span>
        {props.dropdown && <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.00195312 0.0625H11.002L5.50195 7.0625L0.00195312 0.0625Z" fill="white" />
        </svg>}
    </button>
}

export default FilterButton