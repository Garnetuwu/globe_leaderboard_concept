import GlobeLogo from '../../assets/globe_logo.png'
import NavExtension from '../../assets/common/Extension.svg'
import { NavLink, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
        <nav className={`flex justify-between p-[10px] h-[60px] text-sm`}>
            <CommonNav />
            <PersonalNav />
        </nav>
    )
}

const CommonNav = () => {
    const activeLink = (activeData) => activeData.isActive ? 'text-selected' : 'hover:text-selected'

    return <div className='flex-1 flex justify-between'>
        <div className='flex gap-[30px] items-center'>
            <Link to='/'> <img className='w-[95px] h-[28px] inline-block' src={GlobeLogo} alt='globe logo' /> </Link>
            <button> <img className='inline-block' src={NavExtension} alt='extension icon' /> </button>
            <button className='flex items-center gap-2'>
                <span>Wealth</span>
                <span>
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.00195312 0.0625H11.002L5.50195 7.0625L0.00195312 0.0625Z" fill="white" />
                    </svg>
                </span>
            </button>
            <button className='flex items-center gap-2'>
                <span>Markets</span>
                <span>
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.00195312 0.0625H11.002L5.50195 7.0625L0.00195312 0.0625Z" fill="white" />
                    </svg>
                </span>
            </button>
            <NavLink className={activeLink} to='/'>Buy Crypto</NavLink>
            <NavLink className={activeLink} to='/leaderboard'>Leaderboard</NavLink>
            <form action='/'>
                <div className='bg-[#17191F] rounded-[3px] border-[1px] border-[#2F3139] h-[36px] w-[214px] flex items-center'>
                    <span className='mx-2'> <FontAwesomeIcon icon={faMagnifyingGlass} /> </span>
                    <input
                        type='text'
                        className='bg-transparent focus:outline-none'
                        placeholder='search markets'
                    />
                </div>
            </form>
        </div>
        <div className='flex items-center ml-5 gap-[30px] pr-[30px] border-r-[1px] border-break'>
            <NavLink className={activeLink} to='/'>API</NavLink>
            <NavLink className={activeLink} to='/'>Help</NavLink>
        </div>
    </div>
}

const PersonalNav = () => {
    return <ul className='flex items-center'>
        <li className='personalNav relative'>
            <button className='pt-2'>
                <svg width="18" height="18" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.99617 4.9821e-06C8.51367 -0.00196241 9.97234 0.57882 11.0631 1.6193C12.1539 2.65979 12.7911 4.07822 12.8397 5.57409L12.8429 5.7663V8.91624L13.9186 11.3427C13.9833 11.4889 14.0101 11.6487 13.9966 11.8077C13.983 11.9667 13.9295 12.1198 13.841 12.2533C13.7524 12.3868 13.6315 12.4965 13.4893 12.5724C13.347 12.6483 13.1878 12.6881 13.0261 12.6882L9.33484 12.6905C9.33564 13.2909 9.09897 13.868 8.67515 14.2991C8.25133 14.7302 7.67376 14.9813 7.06519 14.999C6.45662 15.0167 5.86504 14.7997 5.41617 14.394C4.96729 13.9883 4.69652 13.426 4.66139 12.8266L4.65749 12.6882H0.974082C0.812565 12.688 0.653625 12.6482 0.511534 12.5725C0.369443 12.4967 0.24865 12.3874 0.160005 12.2542C0.0713587 12.1211 0.0176352 11.9683 0.00365846 11.8096C-0.0103183 11.6509 0.0158894 11.4912 0.0799281 11.345L1.14948 8.91701V5.7663C1.14948 2.57177 3.76256 4.9821e-06 6.99617 4.9821e-06ZM8.16551 12.6889L5.82683 12.6905C5.82678 12.9867 5.94232 13.2716 6.14949 13.4861C6.35666 13.7006 6.63957 13.8282 6.93959 13.8426C7.2396 13.8569 7.5337 13.7568 7.76093 13.5631C7.98815 13.3694 8.13107 13.0968 8.16005 12.802L8.16473 12.6889H8.16551ZM6.99617 1.15326C4.40804 1.15326 2.31882 3.20914 2.31882 5.7663V9.15689L1.27109 11.5357H12.7283L11.6735 9.15765V5.7763L11.6704 5.60331C11.6299 4.40808 11.1194 3.2753 10.247 2.44474C9.3746 1.61417 8.20873 1.151 6.99617 1.15326Z" fill="white" />
                </svg>
                <div className='absolute right-1 top-1 rounded-full bg-[#EC4F6C] h-[17px] min-w-[17px]'>
                    <p className='text-[10px]'>1</p>
                </div>
            </button>
        </li>
        <li className='personalNav relative'>
            <button className='pt-2'>
                <svg width="18" height="18" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.49935 2.5C2.49935 3.0628 2.68532 3.58217 2.99917 4H1.83268C1.18835 4 0.666016 4.52233 0.666016 5.16667V6.83333C0.666016 7.29873 0.938524 7.70048 1.33268 7.88773V13.5C1.33268 14.1443 1.85502 14.6667 2.49935 14.6667H13.4993C14.1437 14.6667 14.666 14.1443 14.666 13.5V7.88773C15.0602 7.70048 15.3327 7.29873 15.3327 6.83333V5.16667C15.3327 4.52233 14.8103 4 14.166 4H12.9995C13.3134 3.58217 13.4993 3.0628 13.4993 2.5C13.4993 1.11929 12.3801 0 10.9993 0C10.029 0 8.70879 0.600727 7.99935 2.0734C7.28991 0.600727 5.96966 0 4.99935 0C3.61864 0 2.49935 1.11929 2.49935 2.5ZM7.47942 4C7.28808 1.6714 5.7656 1 4.99935 1C4.17092 1 3.49935 1.67157 3.49935 2.5C3.49935 3.32843 4.17092 4 4.99935 4H7.47942ZM13.666 8V13.5C13.666 13.592 13.5914 13.6667 13.4993 13.6667H8.49935V8H13.666ZM7.49935 13.6667V8H2.33268V13.5C2.33268 13.592 2.4073 13.6667 2.49935 13.6667H7.49935ZM14.166 7C14.2581 7 14.3327 6.92538 14.3327 6.83333V5.16667C14.3327 5.07462 14.2581 5 14.166 5H8.49935V7H14.166ZM1.83268 7H7.49935V5H1.83268C1.74063 5 1.66602 5.07462 1.66602 5.16667V6.83333C1.66602 6.92538 1.74063 7 1.83268 7ZM12.4993 2.5C12.4993 3.32843 11.8278 4 10.9993 4H8.51928C8.71062 1.6714 10.2331 1 10.9993 1C11.8278 1 12.4993 1.67157 12.4993 2.5Z" fill="white" />
                </svg>
                <div className='absolute right-1 top-1 rounded-full bg-[#EC4F6C] h-[17px] min-w-[17px]'>
                    <p className='text-[10px]'>1</p>
                </div>
            </button>
        </li>
        <li className='personalNav'>
            <button>EN</button>
        </li>
        <li className='personalNav'>
            <div>
                <p><span className='subText'> Total: </span> $2,000</p>
                <p><span className='subText'> Avail: </span> $2,000</p>
            </div>
        </li>
        <li className='personalNav'>
            <button className='flex items-center gap-2'>
                <span>
                    <p className='subText'>Signed in as</p>
                    <p>User</p>
                </span>
                <span>
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.00195312 0.0625H11.002L5.50195 7.0625L0.00195312 0.0625Z" fill="white" />
                    </svg>
                </span>
            </button>
        </li>
    </ul>
}

export default Navbar