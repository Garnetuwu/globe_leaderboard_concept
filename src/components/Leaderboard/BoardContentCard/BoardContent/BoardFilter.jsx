import BoardFilterItem from "./BoardFilterItem"
import GridRow from "../../../UI/GridRow"

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

    return <GridRow className="font-bold">
        {titleListContent}
        <div>Name</div>
    </GridRow>
}

export default BoardFilter