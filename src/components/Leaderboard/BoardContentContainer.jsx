import BoardViews from "./BoardContentCard/BoardViews"
import BoardContent from "./BoardContentCard/BoardContent/BoardContent"
import Card from "../UI/Card"
import { Outlet } from 'react-router-dom'

const BoardContentContainer = () => {
    return <Card className="bg-primary-background mt-[13px] py-[37px] px-[60px]">
        <BoardViews />
        <Outlet />
    </Card>
}

export default BoardContentContainer