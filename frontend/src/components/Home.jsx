import React from 'react'
import Sidebar from './Sidebar'
import MessageContainer from './MessageContainer'

const Home = () => {
    return (
        <div className='sm:h-[450px] md:h-[720px] flex rounded-lg overflow-auto
         bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-100
        ' >
            <Sidebar />
            <MessageContainer />
        </div>
    )
}

export default Home