const BoardListItem = (props) => {
    return (
        <div className="grid grid-cols-6 place-items-center my-[10px] whitespace-nowrap">
            <div>{`#${props.rank}`}</div>
            <div>
                <span className="max-lg:hidden"> W/R </span>
                <span>{`${props.winRate}%`}</span>
            </div>
            <div>
                <span className="max-lg:hidden"> P/L </span>
                <span>{`$${props.pl}`}</span>
            </div>
            <div>
                <span className="max-lg:hidden">V/T</span>
                <span>{`$${props.volume}`}</span>
            </div>
            <div>{props.rating}</div>
            <div>{props.name}</div>
        </div>
    )
}

export default BoardListItem