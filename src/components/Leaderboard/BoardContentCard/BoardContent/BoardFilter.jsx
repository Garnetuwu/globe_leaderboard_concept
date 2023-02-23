import BoardFilterItem from "./BoardFilterItem"

const titleList = [
    {
        title: 'Rank',
        short: 'Rank'
    },
    {
        title: 'Win Rate',
        short: 'WR'
    },
    {
        title: 'Profit and Loss',
        short: 'P/L'
    },
    {
        title: 'Volume Traded',
        short: 'V/T'
    },
    {
        title: 'Trader Rating',
        short: 'Rating'
    }
]

const BoardFilter = () => {
    const titleListContent = titleList.map((el, index) => (
        <BoardFilterItem
            title={el.title}
            short={el.short}
            key={index}
        />
    ))

    return <div className="grid grid-cols-6 place-items-center my-[10px] whitespace-nowrap font-bold ">
        {titleListContent}
        <div>Name</div>
    </div>
}

export default BoardFilter