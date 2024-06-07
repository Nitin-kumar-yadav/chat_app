import React from 'react'
import { RiSendPlaneFill } from "react-icons/ri";

const SendInput = () => {
    return (
        <form className='px-4 my-3' >
            <div className='w-full flex flex-row relative'>
                <input type="text" placeholder='Send a message...' className='border p-3 bg-white text-black border-zinc-500 text-sm rounded-lg w-full  ' />
                <button className='absolute flex items-center text-black top-3.5 right-2'>
                    <RiSendPlaneFill size={25} />
                </button>
            </div>
        </form>
    )
}

export default SendInput