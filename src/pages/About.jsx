import React from 'react'

export default function About() {
    return (
        <div>
            <div className='flex justify-center bg-gray-50'>
                <div className='flex flex-col m-20 items-center'>
                    <div class="inline-flex mb-6 overflow-hidden relative justify-center items-center w-40 h-40 bg-gray-200 rounded-full dark:bg-gray-600 ring ring-lime-500 ring-offset-white ring-offset-4">
                        <span class="font-medium text-gray-600 dark:text-gray-300">W</span>
                    </div>
                    <p className='block font-semibold py-2 pr-4 pl-3 text-gray-900 rounded md:border-0 md:p-0'>Wojtek</p>
                    <p className='block font-semibold py-2 pr-4 pl-3 text-gray-900 rounded md:border-0 md:p-0'>Owner</p>
                    <p className='block font-semibold py-2 pr-4 pl-3 text-gray-900 rounded md:border-0 md:p-0'>About Wojtek</p>
                </div>
                <div className='flex flex-col m-20 items-center'>
                    <div class="inline-flex mb-6 overflow-hidden relative justify-center items-center w-40 h-40 bg-gray-200 rounded-full dark:bg-gray-600 ring ring-lime-500 ring-offset-white ring-offset-4">
                        <span class="font-medium text-gray-600 dark:text-gray-300">KK</span>
                    </div>
                    <p className='block font-semibold py-2 pr-4 pl-3 text-gray-900 rounded md:border-0 md:p-0'>Konrad Kmiec</p>
                    <p className='block font-semibold py-2 pr-4 pl-3 text-gray-900 rounded md:border-0 md:p-0'>CO-Owner</p>
                    <p className='block font-semibold py-2 pr-4 pl-3 text-gray-900 rounded md:border-0 md:p-0'>About Konrad Kmiec</p>
                </div>
            </div>

            <div class="hero h-96 bg-gray-200">
                <div class="hero-content">
                    <div class="max-w-3xl">
                        <h1 class="text-5xl text-gray-900 font-bold">About Ideal Homez</h1>
                        <p class="py-6 text-lg text-gray-500">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn bg-lime-600 border-none hover:bg-lime-700 text-white">Contact Now</button>
                    </div>
                </div>
            </div>

            <div class="flex items-center w-full lg:flex-row bg-gray-50 p-10 text-gray-100 font-bold">
                <div class="grid flex-grow h-48 card bg-gray-900 rounded-box place-items-center">Hard Work</div>
                <div class="p-5 text-extrabold text-gray-900">AND</div>
                <div class="grid flex-grow h-48 card bg-gray-900 rounded-box place-items-center">Dedication</div>
                <div class="p-5 text-extrabold text-gray-900">AND</div>
                <div class="grid flex-grow h-48 card bg-gray-900 rounded-box place-items-center">Passion</div>
            </div>

        </div>
    )
}
