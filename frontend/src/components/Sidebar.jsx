import React from 'react'
import { FaSearch } from "react-icons/fa";
import OtherUsers from './OtherUsers';

const Sidebar = () => {
    return (
        <div className=' overflow-hidden scroll-none  border-r border-slate-500 p-4 flex flex-col'>
            <form className='flex gap-2'>
                <input type="text" placeholder='Search...' className='input input-bordered rounded-lg' />
                <button className='btn btn-circle bg-slate-200 text-green-500' type='submit'  >
                    <FaSearch size={24} />
                </button>
            </form>
            <div className="divider px-3 "></div>
            <OtherUsers />

            <div className='sticky bottom-0.5 left-2 w-full  h-20 flex flex-auto justify-start items-center m-auto ' >
                <button className='btn btn-sm bg-green-500 border-none text-white outline-none hover:bg-green-800'>Logout</button>
            </div>
        </div>
    )
}

export default Sidebar