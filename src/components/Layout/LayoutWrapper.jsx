import Navbar from "./Navbar"
import Footer from "./Footer"
import background from '../../assets/background.png'

const LayoutWrapper = (props) => {
    return (
        <>
            <img className='absolute top-0 left-0 -z-10' src={background} alt='background' />
            <Navbar />
            <main className="flex flex-col justify-center my-[95px] mx-[15%] max-xl:mx-[5%]">
                {props.children}
                <Footer />
            </main>
        </>
    )
}

export default LayoutWrapper