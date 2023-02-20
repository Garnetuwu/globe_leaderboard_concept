import BoardViews from "./BoardContentCard/BoardViews"
import Card from "../UI/Card"
import { Outlet } from 'react-router-dom'

const BoardContentContainer = () => {
    return <Card className="bg-primary-background mt-[13px] py-[37px] px-[60px] max-xl:px-5">
        <BoardViews />
        <Outlet />
    </Card>
}

export default BoardContentContainer