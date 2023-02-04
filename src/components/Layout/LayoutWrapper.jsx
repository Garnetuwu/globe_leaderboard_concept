import Navbar from "./Navbar"
import Footer from "./Footer"
import background from '../../assets/background.png'

const LayoutWrapper = (props) => {
    return (
        <div className='relative'>
            <Navbar />
            <img className='absolute w-full -z-10' src={background} alt='background' />
            <main className="flex flex-col justify-center my-[95px] mx-[15%]">{props.children}</main>
            <Footer />
        </div>
    )
}

export default LayoutWrapper