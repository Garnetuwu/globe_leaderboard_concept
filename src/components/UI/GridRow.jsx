const GridRow = ({ children, className }) => {
    return <div className={`${className} grid grid-cols-6 place-items-center my-[10px] whitespace-nowrap`}>
        {children}
    </div>
}

export default GridRow