import React from 'react'

export default function Contact() {
    return (
        <div>
            <div class="hero h-96 bg-gray-50">
                <div class="hero-content text-center">
                    <div class="max-w-md">
                        <h2 className='text-center text-3xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl'>Contact</h2>
                        <p class="py-4">Welcome to our Contact page feel free to email us with any questions or to get started with a idea you have in mind!</p>
                    </div>
                </div>
            </div>

            <div className='bg-gray-50 p-5 flex justify-center pb-40'>
                <form className='bg-gray-900 rounded p-5 flex flex-col justify-center w-4/6' action="mailto:info@w3docs.com" method="get" enctype="text/plain">
                    <div>
                        <label className='block text-sm font-medium text-gray-100 p-1' for="name">Name:
                            <input className='p-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-1 pr-1 sm:text-sm border-gray-300 rounded-md' type="text" name="name" id="name" />
                        </label>
                    </div>
                    <div>
                        <label className='block text-sm font-medium text-gray-100 p-1' for="email">Email:
                            <input className='p-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-1 pr-1 sm:text-sm border-gray-300 rounded-md' type="text" name="email" id="email" />
                        </label>
                    </div>
                    <div>
                        <label className='text-sm font-medium text-gray-100'>Comments:</label>
                        <br />
                        <textarea className='rounded text-gray-900 px-1 w-full h-28' name="comments"></textarea>
                    </div>
                    <div>
                        <input className='inline-block text-center m-2 bg-lime-600 border border-transparent rounded-md py-3 px-5 font-medium text-white hover:bg-lime-700' type="submit" name="submit" value="Send" />
                        <input className='inline-block text-center bg-lime-600 border border-transparent rounded-md py-3 px-5 font-medium text-white hover:bg-lime-700' type="reset" name="reset" value="Clear Form" />
                    </div>
                </form>
            </div>

        </div>
    )
}
