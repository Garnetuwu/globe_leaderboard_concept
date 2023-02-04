const Card = (props) => {
    return <div className={`rounded-[10px] ${props.className}`}>
        {props.children}
    </div>
}

export default Card