import React from 'react'
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>

            <div className="bg-lime-600">
                <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap items-center justify-between">
                        <div className="flex w-0 flex-1 items-center">
                            <span className="flex rounded-lg bg-white p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
                                </svg>

                            </span>
                            <p className="ml-3 truncate font-medium text-white">
                                <span className="md:hidden">We announced a new product!</span>
                                <span className="hidden md:inline">Big news! We're excited to announce our website launch.</span>
                            </p>
                        </div>
                        <div className="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
                            <a
                                href="/services"
                                className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-lime-600 shadow-sm hover:bg-lime-50"
                            >
                                Services
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative bg-gray-50 overflow-hidden">
                <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
                        <div className="sm:max-w-lg">
                            <h1 className="text-3xl font font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                                Looking to upgrade your home?
                            </h1>
                            <p className="mt-4 text-lg text-gray-500">
                                This year, our new summer collection will shelter you from the harsh elements of a world that doesn't care
                                if you live or die.
                            </p>
                        </div>
                        <div>
                            <div className="mt-10">
                                {/* Decorative image grid */}
                                <div
                                    aria-hidden="true"
                                    className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full"
                                >
                                    <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                                        <div className="flex items-center space-x-6 lg:space-x-8">
                                            <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                                                <div className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                                                    <img
                                                        src="https://daycustomhomes.ca/wp-content/uploads/2018/03/day-custom-homes-toronto-1.jpg"
                                                        alt="pic-1"
                                                        className="w-full h-full object-center object-cover"
                                                    />
                                                </div>
                                                <div className="w-44 h-64 rounded-lg overflow-hidden">
                                                    <img
                                                        src="https://stonehillbuilders.com/wp-content/uploads/2020/02/Wood-frame-of-custom-house-being-built-in-Northern-Virginia.jpg"
                                                        alt="pic-2"
                                                        className="w-full h-full object-center object-cover"
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                                                <div className="w-44 h-64 rounded-lg overflow-hidden">
                                                    <img
                                                        src="https://www.thehandymansdaughter.com/wp-content/uploads/2020/10/neat-stack-of-2x4-lumber.jpg.webp"
                                                        alt="pic-3"
                                                        className="w-full h-full object-center object-cover"
                                                    />
                                                </div>
                                                <div className="w-44 h-64 rounded-lg overflow-hidden">
                                                    <img
                                                        src="https://nextluxury.com/wp-content/uploads/cool-workshop-ideas-for-woodworking.jpg"
                                                        alt="pic-4"
                                                        className="w-full h-full object-center object-cover"
                                                    />
                                                </div>
                                                <div className="w-44 h-64 rounded-lg overflow-hidden">
                                                    <img
                                                        src="https://www.sterlingcustomhome.com/wp-content/uploads/2019/04/11330-Dante-Circle-Littleton-large-038-17-Back-Yard-1500x1000-72dpi-min-1024x683.jpg"
                                                        alt="pic-5"
                                                        className="w-full h-full object-center object-cover"
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                                                <div className="w-44 h-64 rounded-lg overflow-hidden">
                                                    <img
                                                        src="https://conlinpremierconstruction.com/img/custom-home-construction.jpg"
                                                        alt="pic-6"
                                                        className="w-full h-full object-center object-cover"
                                                    />
                                                </div>
                                                <div className="w-44 h-64 rounded-lg overflow-hidden">
                                                    <img
                                                        src="https://daycustomhomes.ca/wp-content/uploads/2018/03/tolman1.jpg"
                                                        alt="pic-7"
                                                        className="w-full h-full object-center object-cover"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <Link
                                    to="/gallery"
                                    className="inline-block text-center bg-lime-600 border border-transparent rounded-md py-3 px-5 font-medium text-white hover:bg-lime-700"
                                >
                                    Gallery
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">

                        <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
                            <div className="group relative">
                                <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                                    <img
                                        src='https://wpmedia.roomsketcher.com/content/uploads/2021/12/14154723/RoomSketcher-Home-Designer-Custom-3D-Floor-Plan.jpg'
                                        className="w-full h-full object-center object-cover"
                                    />
                                </div>
                                <h3 className="text-xl text-center mt-4 font-bold text-gray-900">Design</h3>
                                <p className="text-base p-2 text-gray-500 ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                            </div>

                            <div className="group relative">
                                <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                                    <img
                                        src='https://cdn.vox-cdn.com/thumbor/KrNjaW263LdvsGPRg1valjIn_rI=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/21818147/iStock_172413371.jpg'
                                        className="w-full h-full object-center object-cover"
                                    />
                                </div>
                                <h3 className="text-xl text-center mt-4 font-bold text-gray-900">Construct</h3>
                                <p className="text-base p-2 text-gray-500 ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                            </div>

                            <div className="group relative">
                                <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                                    <img
                                        src='https://wallzcorp.com/wp-content/uploads/2017/10/133.jpg'
                                        className="w-full h-full object-center object-cover"
                                    />
                                </div>
                                <h3 className="text-xl text-center mt-4 font-bold text-gray-900">Delight</h3>
                                <p className="text-base p-2 text-gray-500 ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="bg-gray-50 p-5">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        <span className="block">Ready to take your home to the next level?</span>
                        <span className="block text-lime-500">Contact us today.</span>
                    </h2>
                    <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                        <div className="inline-flex rounded-md shadow">
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-lime-500 hover:bg-lime-700"
                            >
                                Contact
                            </Link>
                        </div>
                        <div className="ml-3 inline-flex rounded-md shadow">
                            <Link
                                to="/about"
                                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-lime-500 bg-white hover:bg-lime-50"
                            >
                                Learn more
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
