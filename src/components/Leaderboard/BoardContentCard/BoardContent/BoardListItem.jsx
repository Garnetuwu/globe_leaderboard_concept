const BoardListItem = (props) => {
    return (
        <div className="grid grid-cols-6 my-[10px] whitespace-nowrap">
            <div>{`#${props.rank}`}</div>
            <div> W/R <span>{`${props.winRate}%`}</span></div>
            <div> P/L <span>{`$${props.pl}`}</span></div>
            <div> V/T <span>{`$${props.volume}`}</span></div>
            <div>{props.rating}</div>
            <div>{props.name}</div>
        </div>
    )
}

export default BoardListItem