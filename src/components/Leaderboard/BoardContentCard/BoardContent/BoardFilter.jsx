import FilterButton from "../../../UI/FilterButton"

const BoardFilter = () => {
    const titleList = [
        'Ranking',
        'Win Rate',
        'Profit and Loss',
        'Volume Traded',
        'Trader Rating',
        'Name'
    ].map((title, index) => (
        <li key={index} className='py-[10px]'>
            <FilterButton dropdown={title !== 'Name'}>{title}</FilterButton>
        </li>
    ))
    return <ul className="grid grid-cols-6 justify-between my-[10px] whitespace-nowrap">
        {titleList}
    </ul>
}

export default BoardFilter