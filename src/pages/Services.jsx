import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "../index.css"

export default function Services() {
    return (
        <div className='bg-gray-50'>

            <div class="hero h-96 bg-gray-50">
                <div class="hero-content text-center">
                    <div class="max-w-md">
                        <h2 className='text-center text-3xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl'>Services</h2>
                        <p class="py-4">Welcome to our services page if you need more clarification about anything you can contact us over email.</p>
                    </div>
                </div>
            </div>

            <div>

            </div>

            <Swiper
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    dynamicBullets: true,
                }}
                loop={true}
                modules={[Pagination]}
                className="h-96 bg-gray-200"
            >
                <SwiperSlide className='swipe-text swipe-img-1'>Renovations</SwiperSlide>
                <SwiperSlide className='swipe-text swipe-img-3'>Custom Home Building</SwiperSlide>
                <SwiperSlide className='swipe-text swipe-img-2'>Cabinets and Kitchens</SwiperSlide>
            </Swiper>

            <div class="bg-white py-12">
                <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div class="lg:text-center">
                        <h2 class="text-lg font-semibold text-lime-600">Services</h2>
                        <p class="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">A way to improve your space!</p>
                        <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.</p>
                    </div>

                    <div class="mt-10">
                        <dl class="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
                            <div class="relative">
                                <dt>
                                    <div class="absolute flex h-12 w-12 items-center justify-center rounded-md bg-lime-500 text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                                        </svg>
                                    </div>
                                    <p class="ml-16 text-lg font-medium leading-6 text-gray-900">Renovations</p>
                                </dt>
                                <dd class="mt-2 ml-16 text-base text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</dd>
                            </div>

                            <div class="relative">
                                <dt>
                                    <div class="absolute flex h-12 w-12 items-center justify-center rounded-md bg-lime-500 text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                        </svg>

                                    </div>
                                    <p class="ml-16 text-lg font-medium leading-6 text-gray-900">Custom Home Building</p>
                                </dt>
                                <dd class="mt-2 ml-16 text-base text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</dd>
                            </div>

                            <div class="relative">
                                <dt>
                                    <div class="absolute flex h-12 w-12 items-center justify-center rounded-md bg-lime-500 text-white">
                                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                                        </svg>
                                    </div>
                                    <p class="ml-16 text-lg font-medium leading-6 text-gray-900">Cabinets and Kitchens</p>
                                </dt>
                                <dd class="mt-2 ml-16 text-base text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</dd>
                            </div>


                        </dl>
                    </div>
                </div>
            </div>

            <div className="bg-gray-50">
                <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        <span className="block">Ready to dive in?</span>
                        <span className="block text-lime-600">Get your quote today.</span>
                    </h2>
                    <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                        <div className="inline-flex rounded-md shadow">
                            <a
                                href="/contact"
                                className="inline-flex items-center justify-center rounded-md border border-transparent bg-lime-600 px-5 py-3 text-base font-medium text-white hover:bg-lime-700"
                            >
                                Get started
                            </a>
                        </div>
                        <div className="ml-3 inline-flex rounded-md shadow">
                            <a
                                href="/about"
                                className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-lime-600 hover:bg-indigo-50"
                            >
                                Learn more
                            </a>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}
