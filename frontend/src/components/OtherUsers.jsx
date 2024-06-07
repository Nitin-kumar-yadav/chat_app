import React from 'react'
import OtherUser from './OtherUser'
import useGetOtherUser from '../hooks/useGetOtherUser'

const OtherUsers = () => {

    useGetOtherUser();

    return (
        <div className='overflow-y-auto ' >
            <OtherUser />
            <OtherUser />
            <OtherUser />
            <OtherUser />
            <OtherUser />
            <OtherUser />
            <OtherUser />
            <OtherUser />
            <OtherUser />
            <OtherUser />


        </div>
    )
}

export default OtherUsers