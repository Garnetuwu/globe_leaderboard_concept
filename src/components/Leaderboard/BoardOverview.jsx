import Card from '../UI/Card'

const BoardOverview = () => {
    const overviewList = [
        ['Active strategies', '48,578'],
        ['Copies', '48,000'],
        ['Total Value', '$145m'],
    ].map(([title, value], index) => (
        <li className={`basis-1/3 text-center my-[15px] px-[20px]  ${index !== 2 ? 'border-r-[1px] border-break' : ''} `}
            key={index}>
            <p className="text-sm text-caption whitespace-nowrap">{title}</p>
            <p className="text-lg">{value}</p>
        </li>
    ))
    return <Card className="bg-primary-background flex-1 max-w-[600px]">
        <p className="text-caption text-xs font-semibold text-right mt-2 mr-2">Copy Trading Homepage</p>
        <ul className="flex justify-between">
            {overviewList}
        </ul>
    </Card>
}

export default BoardOverview