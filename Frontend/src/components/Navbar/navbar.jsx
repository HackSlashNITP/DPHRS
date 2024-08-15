import React from 'react'
import './navbar.css'
const Navbar = () => {
    return (
        <div className='w-[100%] h-[70px]  flex fixed top-[0px] z-[300]'>
            <div className='main w-[80%] h-[48px] m-auto flex flex-row justify-between justify-center items-center'>
                <div className='logo'>
                    <svg width="45" height="40" viewBox="0 0 45 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 8.13706L2.61961 38.6142C2.61961 38.6142 24.9702 38.6142 29.0732 35.5279C33.1762 32.4416 30.9088 12.7665 27.4536 5.24366C23.9984 -2.27918 1 8.13706 1 8.13706Z" stroke="url(#paint0_linear_9_28)" />
                        <path d="M1.10794 8.32995C1.10794 8.32995 13.9921 1 25.5453 1C37.0985 1 40.1218 2.54315 40.7696 4.27919C41.4174 6.01523 44.9453 29.066 43.7575 32.731C42.5698 36.396 36.1994 37.1675 30.5848 37.5533C24.9701 37.9391 3.59134 39 3.59134 39M2.29565 21.1574L12.0133 18.6498L13.4169 29.4518L19.2475 27.8122L16.8721 13.0558L2.29565 17.0102V21.1574Z" stroke="url(#paint1_linear_9_28)" />
                        <defs>
                            <linearGradient id="paint0_linear_9_28" x1="16.1377" y1="2.51463" x2="16.1377" y2="38.6142" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#43D85B" />
                                <stop offset="1" stop-color="#2678C4" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_9_28" x1="22.554" y1="1" x2="22.554" y2="39" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#43D85B" />
                                <stop offset="1" stop-color="#2678C4" />
                            </linearGradient>
                        </defs>
                    </svg>

                </div>
                <div className='mid'>
                      <div className='new'></div>
                </div>
                <div className='w-[40%]  h-[30px] flex flex-row justify-center items-center'>
                      <ul className='flex justify-evenly w-[100%] text-white'>
                        <li>Home </li>
                        <li>About </li>
                        <li>Features </li>
                        <li> Contact</li>
                      </ul>
                </div>
            </div>
        </div>
    )
}
export default Navbar