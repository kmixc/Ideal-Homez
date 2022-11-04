import React from 'react'
import { Link } from "react-router-dom";
import Logo from "../img/ideal-homez-2.svg"
import Icon1 from "../img/facebook-icon.svg"
import Icon2 from "../img/instagram-icon.svg"

export default function Footer() {
    return (
        <div>
            <nav class="bg-white border-gray-200 px-10 pt-10 pb-5 bg-gray-900 tracking-tight ">
                <div class="container flex justify-between mx-auto">
                    <div className='flex flex-col items-start'>
                        <img src={Logo} class="mr-3 h-6 sm:h-9" alt="Ideal Homez Logo" />
                        <br />
                        <span class="text-m tracking-tight font-bold text-gray-400">Ideal Homez Ltd.</span>
                        <span class="text-m tracking-tight font-bold text-gray-400">Building custom homes since 2000</span>
                    </div>
                    <div className='font-bold'>
                        <p className='block py-2 pr-4 pl-3 text-gray-600 rounded md:border-0 md:p-0'>COMPANY</p>
                        <br />
                        <Link to="/" className='block py-2 pr-4 pl-3 text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-lime-400 md:p-0'>Home</Link>
                        <Link to="/about" className='block py-2 pr-4 pl-3 text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-lime-400 md:p-0'>About</Link>
                        <Link to="/gallery" className='block py-2 pr-4 pl-3 text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-lime-400 md:p-0'>Gallery</Link>
                        <Link to="/services" className='block py-2 pr-4 pl-3 text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-lime-400 md:p-0'>Services</Link>
                        <Link to="/contact" className='block py-2 pr-4 pl-3 text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-lime-400 md:p-0'>Contact</Link>
                    </div>
                    <div className='font-bold'>
                        <p className='block py-2 pr-4 pl-3 text-gray-600 rounded md:border-0 md:p-0'>LEGAL</p>
                        <br />
                        <Link to="/" className='block py-2 pr-4 pl-3 text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-lime-400 md:p-0'>Terms of use</Link>
                        <Link to="/about" className='block py-2 pr-4 pl-3 text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-lime-400 md:p-0'>Privacy policy</Link>
                    </div>
                    <div className='font-bold'>
                        <p className='block py-2 text-center pr-4 pl-3 text-gray-600 rounded md:border-0 md:p-0'>SOCIALS</p>
                        <br />
                        <div className='flex items-center justify-center'>
                            <a className='m-1 rounded hover:bg-lime-500 p-1' target="social" href="#"><img className='w-8' src={Icon1} alt="facebook-icon" /></a>
                            <a className='m-1 rounded hover:bg-lime-500 p-1' target="social" href="#"><img className='w-8' src={Icon2} alt="instagram-icon" /></a>
                        </div>
                    </div>
                </div>
                <p className='text-center mt-16 text-gray-500 rounded font-bold'>Copyright © 2022 - All right reserved by Ideal Homez Ltd</p>
            </nav>
        </div>
    )
}
