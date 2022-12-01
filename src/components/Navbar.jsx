import React from 'react'
import { Link } from "react-router-dom";
import Logo from "../img/ideal-homez-2.svg"


export default function Navbar() {
    return (
        <div>
            <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 bg-gray-900 tracking-tight ">
                <div class="container flex flex-wrap justify-between items-center mx-auto">
                    <Link to="/" class="flex items-center">
                        <img src={Logo} class="mr-3 h-6 sm:h-9" alt="Ideal Homez Logo" />
                        <span class="self-center text-xl font-bold tracking-tight text-white">Ideal Homez</span>
                    </Link>
                    <div class="w-full md:block md:w-auto" id="navbar-default">
                        <ul class="flex flex-row justify-center p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <Link to="/" className='block py-2 pr-4 pl-3 text-white rounded hover:text-lime-500 md:hover:bg-transparent md:border-0 md:hover:text-lime-500 md:p-0'>Home</Link>
                            </li>
                            <li>
                                <Link to="/about" className='block py-2 pr-4 pl-3 text-white rounded hover:text-lime-500 md:hover:bg-transparent md:border-0 md:hover:text-lime-500 md:p-0'>About</Link>
                            </li>
                            <li>
                                <Link to="/gallery" className='block py-2 pr-4 pl-3 text-white rounded hover:text-lime-500 md:hover:bg-transparent md:border-0 md:hover:text-lime-500 md:p-0'>Gallery</Link>
                            </li>
                            <li>
                                <Link to="/services" className='block py-2 pr-4 pl-3 text-white rounded hover:text-lime-500 md:hover:bg-transparent md:border-0 md:hover:text-lime-500 md:p-0'>Services</Link>
                            </li>
                            <li>
                                <Link to="/contact" className='block py-2 pr-4 pl-3 text-white rounded hover:text-lime-500 md:hover:bg-transparent md:border-0 md:hover:text-lime-500 md:p-0'>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}