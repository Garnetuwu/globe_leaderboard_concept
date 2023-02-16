import BoardFilterItem from "./BoardFilterItem"

const BoardFilter = (props) => {
    const titleList = [
        'Ranking',
        'Win Rate',
        'Profit and Loss',
        'Volume Traded',
        'Trader Rating',
        'Name'
    ].map((title, index) => {
        if (title !== 'Name') {
            return <BoardFilterItem
                title={title}
                key={index}
                onClick={props.onSort}
                filter={props.filter} />
        } else {
            return <div>
                <span>{title}</span>
            </div>
        }
    })

    return <div className="grid grid-cols-6 justify-between my-[10px] whitespace-nowrap">
        {titleList}
    </div>
}

export default BoardFilter