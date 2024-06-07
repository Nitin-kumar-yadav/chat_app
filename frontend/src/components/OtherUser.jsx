import React from 'react'

const OtherUser = () => {
    return (
        <div className='my-2 p-2 hover:backdrop-blur-2xl rounded-md bg-clip-padding backdrop-filter bg-opacity-70 cursor-pointer
        ' >
            <div >
                <div className='flex flex-row gap-3 '>
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
            </div>
        </div>
    )
}

export default OtherUser