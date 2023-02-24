const FilterButton = (props) => {
    return <button className={`flex justify-center items-center py-1 px-3 gap-1 ${props.className}`} onClick={props.onClick}>
        <span className={props.highlited ? 'text-selected' : ''}>{props.children}</span>
        <svg className='visible max-lg:hidden scale-[80%]' width="12" height="8" viewBox="0 0 12 8" fill='none' xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M0.00195312 0.0625H11.002L5.50195 7.0625L0.00195312 0.0625Z" fill={props.highlited ? '#EEBA2B' : 'white'} />
        </svg>
    </button>
}

export default FilterButton