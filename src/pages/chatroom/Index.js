import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getUser } from './../../redux/actions/UserActions';
import { getChats, sendMessage } from './../../redux/actions/ChatActions';

const Index = ({ getUser: getCurrentUser, user, getChats: getMessages, chats, sendMessage: postMessage }) => {
    const [message, setMessage] = useState('');
    useEffect(() => {
        getCurrentUser();
    }, [getCurrentUser, getMessages]);
    useEffect(() => {
        getMessages();
    });
    const scrollToBottom = () => {
        let el = document.getElementById('messages');
        let scroll_height = el.scrollHeight, client_height = el.clientHeight;
        let maxScrollTop = scroll_height - client_height;
        el.scroll({ top: maxScrollTop > 0 ? maxScrollTop : 0, behavior: 'smooth' });
    }
    if(!user) return window.location.href = '/';
    return (
        <div className='flex flex-col justify-center items-center w-full h-screen bg-white'>
            <div className='max-w-md bg-white rounded w-full flex flex-col'>
                <div className='bg-gray-700 p-5 rounded-t'>
                    <h1 className='text-white'>Chat Room</h1>
                </div>
                <div className='h-72 bg-slate-200 overflow-y-auto pb-5' id='messages'>
                    {chats.map((chat, i) => {
                        if(chat.sender === user) {
                            return <div key={i} className='flex flex-row justify-end items-start gap-x-3 mt-5 px-2'>
                                <p className='bg-gray-600 text-white py-2 px-6 rounded-sm'>{chat.message}</p>
                                <img className='bg-gray-400 h-10 rounded-full object-contain' src='/img/profile.png' alt='avatar' />
                            </div>
                        } else {
                            return <div key={i} className='flex flex-row justify-start items-start gap-x-3 mt-5 px-2 w-full'>
                                <img className='bg-gray-400 h-10 rounded-full object-contain' src='/img/profile.png' alt='avatar' />
                                <p className='bg-gray-600 text-white py-2 px-6 rounded-sm'>{chat.message} - {chat.sender}</p>
                            </div>
                        }
                    })}
                </div>
                <form className='flex flex-row items-center bg-gray-700 p-5 rounded-b' onSubmit={e => {
                    e.preventDefault();
                    let obj = { message, sender: user };
                    postMessage(obj);
                    setMessage('');
                    scrollToBottom();
                }}>
                    <input id="message" name="message" type="text" autoComplete='off' required className="rounded-full relative block w-full px-5 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm" placeholder="Write ..." value={message} onChange={e => setMessage(e.target.value)} />
                    <button type='submit' className='bg-white text-gray-700 uppercase py-2 px-5 ml-3 rounded-full'>Send</button>
                </form>
            </div>
        </div>
    )
};

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.user,
        chats: state.chats
    }
};

export default connect(mapStateToProps, { getUser, getChats, sendMessage })(Index);
