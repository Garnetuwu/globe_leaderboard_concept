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
    },
    {
        title: 'Name',
        short: 'Name'
    }
]

const BoardFilter = (props) => {
    const titleListContent = titleList.map((el) => {
        if (el.title !== 'Name') {
            return <BoardFilterItem
                title={el.title}
                short={el.short}
                key={el.title}
                onClick={props.onSort}
                filter={props.filter} />
        } else {
            return <div>
                <span>{el.title}</span>
            </div>
        }
    })

    return <div className="grid grid-cols-6 place-items-center my-[10px] whitespace-nowrap">
        {titleListContent}
    </div>
}

export default BoardFilter