import { Link } from "react-router-dom"
import footerList from "../../utils/footerList"
import Twitter from '../../assets/contacts/Twitter.svg'
import Medium from '../../assets/contacts/Medium.svg'
import Telegram from '../../assets/contacts/Telegram.svg'
import Discord from '../../assets/contacts/Twitter-1.svg'

const Footer = () => {
    const footerContent = footerList.map(segment => (
        <div>
            <div className="text-selected font-semibold">{segment.title}</div>
            <div className="font-light grid grid-rows-7 grid-flow-col gap-x-[5rem]">
                {segment.subSection.map(section => (
                    <Link to='/' className="whitespace-nowrap hover:underline underline-offset-4 decoration-selected">{section}</Link>
                ))}
            </div>
        </div>

    ))
    return (
        <footer className="flex justify-around gap-y-[5rem] flex-wrap mt-20 text-xs leading-10">
            <div className="flex flex-wrap gap-[5rem]">
                {footerContent}
            </div>
            <div className="flex flex-col items-center">
                <div className="text-selected font-semibold"> Community </div>
                <ul className="flex justify-center flex-wrap gap-3">
                    <li>
                        <a href='/'> <img src={Telegram} /> </a>
                    </li>
                    <li>
                        <a href='/'> <img src={Twitter} /> </a>
                    </li>
                    <li>
                        <a href='/'> <img src={Medium} /> </a>
                    </li>
                    <li>
                        <a href='/'> <img src={Discord} /> </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer