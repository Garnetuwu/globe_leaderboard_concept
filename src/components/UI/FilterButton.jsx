const FilterButton = (props) => {
    return <button className='flex items-center gap-1' onClick={props.onClick}>
        <span className={props.highlited && 'text-selected'}>{props.children}</span>
        <svg className='visible max-lg:hidden scale-[80%]' width="12" height="8" viewBox="0 0 12 8" fill='none' xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M0.00195312 0.0625H11.002L5.50195 7.0625L0.00195312 0.0625Z" fill={props.highlited ? '#EEBA2B' : 'white'} />
        </svg>
    </button>
}

export default FilterButton