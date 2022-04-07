import React from 'react';

const Index = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-screen bg-white'>
            <div className='max-w-md bg-white rounded w-full flex flex-col'>
                <div className='bg-gray-700 p-5 rounded-t'>
                    <h1 className='text-white'>Chat Room</h1>
                </div>
                <div className='h-72 bg-slate-200 overflow-y-auto pb-5'>
                    <div className='flex flex-row justify-start items-start gap-x-3 mt-5 px-2 w-full'>
                        <img className='bg-gray-400 h-10 rounded-full object-contain' src='/img/profile.png' alt='avatar' />
                        <p className='bg-gray-600 text-white py-2 px-6 rounded-sm'>Hello There</p>
                    </div>
                    <div className='flex flex-row justify-end items-start gap-x-3 mt-5 px-2'>
                        <p className='bg-gray-600 text-white py-2 px-6 rounded-sm'>Hello There</p>
                        <img className='bg-gray-400 h-10 rounded-full object-contain' src='/img/profile.png' alt='avatar' />
                    </div>
                    <div className='flex flex-row justify-start items-start gap-x-3 mt-5 px-2 w-full'>
                        <img className='bg-gray-400 h-10 rounded-full object-contain' src='/img/profile.png' alt='avatar' />
                        <p className='bg-gray-600 text-white py-2 px-6 rounded-sm'>Hello There</p>
                    </div>
                    <div className='flex flex-row justify-end items-start gap-x-3 mt-5 px-2'>
                        <p className='bg-gray-600 text-white py-2 px-6 rounded-sm'>Hello There</p>
                        <img className='bg-gray-400 h-10 rounded-full object-contain' src='/img/profile.png' alt='avatar' />
                    </div>
                    <div className='flex flex-row justify-start items-start gap-x-3 mt-5 px-2 w-full'>
                        <img className='bg-gray-400 h-10 rounded-full object-contain' src='/img/profile.png' alt='avatar' />
                        <p className='bg-gray-600 text-white py-2 px-6 rounded-sm'>Hello There</p>
                    </div>
                    <div className='flex flex-row justify-end items-start gap-x-3 mt-5 px-2'>
                        <p className='bg-gray-600 text-white py-2 px-6 rounded-sm'>Hello There</p>
                        <img className='bg-gray-400 h-10 rounded-full object-contain' src='/img/profile.png' alt='avatar' />
                    </div>
                    <div className='flex flex-row justify-start items-start gap-x-3 mt-5 px-2 w-full'>
                        <img className='bg-gray-400 h-10 rounded-full object-contain' src='/img/profile.png' alt='avatar' />
                        <p className='bg-gray-600 text-white py-2 px-6 rounded-sm'>Hello There</p>
                    </div>
                    <div className='flex flex-row justify-end items-start gap-x-3 mt-5 px-2'>
                        <p className='bg-gray-600 text-white py-2 px-6 rounded-sm'>Hello There</p>
                        <img className='bg-gray-400 h-10 rounded-full object-contain' src='/img/profile.png' alt='avatar' />
                    </div>
                    <div className='flex flex-row justify-start items-start gap-x-3 mt-5 px-2 w-full'>
                        <img className='bg-gray-400 h-10 rounded-full object-contain' src='/img/profile.png' alt='avatar' />
                        <p className='bg-gray-600 text-white py-2 px-6 rounded-sm'>Hello There</p>
                    </div>
                    <div className='flex flex-row justify-end items-start gap-x-3 mt-5 px-2'>
                        <p className='bg-gray-600 text-white py-2 px-6 rounded-sm'>Hello There</p>
                        <img className='bg-gray-400 h-10 rounded-full object-contain' src='/img/profile.png' alt='avatar' />
                    </div>

                    <div className='flex flex-row justify-start items-start gap-x-3 mt-5 px-2 w-full'>
                        <img className='bg-gray-400 h-10 rounded-full object-contain' src='/img/profile.png' alt='avatar' />
                        <p className='bg-gray-600 text-white py-2 px-6 rounded-sm'>Hello There</p>
                    </div>
                    <div className='flex flex-row justify-end items-start gap-x-3 mt-5 px-2'>
                        <p className='bg-gray-600 text-white py-2 px-6 rounded-sm'>Hello There</p>
                        <img className='bg-gray-400 h-10 rounded-full object-contain' src='/img/profile.png' alt='avatar' />
                    </div>
                    <div className='flex flex-row justify-start items-start gap-x-3 mt-5 px-2 w-full'>
                        <img className='bg-gray-400 h-10 rounded-full object-contain' src='/img/profile.png' alt='avatar' />
                        <p className='bg-gray-600 text-white py-2 px-6 rounded-sm'>Hello There</p>
                    </div>
                    <div className='flex flex-row justify-end items-start gap-x-3 mt-5 px-2'>
                        <p className='bg-gray-600 text-white py-2 px-6 rounded-sm'>Hello There</p>
                        <img className='bg-gray-400 h-10 rounded-full object-contain' src='/img/profile.png' alt='avatar' />
                    </div>
                    <div className='flex flex-row justify-start items-start gap-x-3 mt-5 px-2 w-full'>
                        <img className='bg-gray-400 h-10 rounded-full object-contain' src='/img/profile.png' alt='avatar' />
                        <p className='bg-gray-600 text-white py-2 px-6 rounded-sm'>Hello There</p>
                    </div>
                    <div className='flex flex-row justify-end items-start gap-x-3 mt-5 px-2'>
                        <p className='bg-gray-600 text-white py-2 px-6 rounded-sm'>Hello There</p>
                        <img className='bg-gray-400 h-10 rounded-full object-contain' src='/img/profile.png' alt='avatar' />
                    </div>
                </div>
                <form className='flex flex-row items-center bg-gray-700 p-5 rounded-b'>
                    <input id="message" name="message" type="text" autoComplete='off' required className="rounded-full relative block w-full px-5 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm" placeholder="Write ..." />
                    <button className='bg-white text-gray-700 uppercase py-2 px-5 ml-3 rounded-full'>Send</button>
                </form>
            </div>
        </div>
  )
};

export default Index;
