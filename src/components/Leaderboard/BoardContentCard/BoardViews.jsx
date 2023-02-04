import { NavLink } from "react-router-dom"

const BoardViews = () => {
    const activeLink = (activeData) => activeData.isActive ? 'text-selected pb-[14px] border-b-[1px] border-selected' : 'hover:text-selected'

    const BoardViewList = [
        ['All time', 'all-time'],
        ['Current Season', 'current-season'],
        ['Followed Traders', 'followed-traders'],
        ['My Ranking', 'my-ranking'],
    ].map(([title, url], index) => (
        <li key={index}>
            <NavLink className={activeLink} to={url} >{title}</NavLink>
        </li>
    ))
    return <ul className="flex gap-[25px] text-sm py-[14px] text-caption border-b-[1px] border-break">
        {BoardViewList}
    </ul>
}

export default BoardViews