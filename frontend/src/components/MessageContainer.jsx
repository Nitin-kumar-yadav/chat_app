import React from 'react'
import SendInput from './SendInput'
import Messages from './Messages'

const MessageContainer = () => {
    return (
        <div className='md:min-w-[550px] flex flex-col' >
            <div className='flex gap-3 bg-zinc-800 text-white p-3'>
                <div className='avatar online' >
                    <div className='w-12 rounded-full' >
                        <img src="https://imgs.search.brave.com/mR-qTglzpGl8uw83n_ErbMNuZKXcqnfulrRGN17nsn0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvY29vbC1wcm9m/aWxlLXBpY3R1cmUt/ODdoNDZnY29iamw1/ZTR4dS5qcGc" alt="logo" />
                    </div>
                </div>
                <div className='flex flex-auto text-center justify-start m-auto' >
                    <div className='flex flex-auto text-center' >
                        <p className='text-white'>Nitin</p>
                    </div>
                </div>
            </div>
            <Messages />
            <SendInput />
        </div>
    )
}

export default MessageContainer