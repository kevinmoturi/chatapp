import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    return (
        <div className='flex flex-col justify-center items-center w-full h-screen bg-gray-900'>
            <div className='max-w-md bg-white rounded w-full p-10'>
                <h1 className="text-3xl font-bold text-gray-700 text-center">Welcome to Chat Room</h1>
                <p className='text-sm text-gray-500 capitalize text-center'>Name field is required</p>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    navigate('/chatroom');
                }}>
                    <div className='my-5'>
                        <label for="name" className='font-semibold text-gray-500'>Name (s)</label>
                        <input id="name" name="name" type="text" autoComplete='off' required className="rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm mt-2" placeholder="e.g John" value={name} onChange={e => setName(e.target.value)} />
                    </div>
                    <div className='my-8'>
                        <button type='submit' className='w-full bg-gray-900 text-gray-200 py-2 rounded shadow'>Enter Chat Room</button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default Index;
