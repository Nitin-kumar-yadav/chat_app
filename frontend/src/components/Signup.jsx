import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";
import toast from 'react-hot-toast'


const Signup = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        fullName: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: ""
    })

    const handleCheckBox = (gender) => {
        setUser({ ...user, gender: gender })
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();


        try {
            const response = await axios.post('https://chat-app-api-umber.vercel.app/api/v1/users/signup', user, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            if (!response) {
                toast.error("Sign up failed")
                return
            }
            toast.success(`Welcome, ${response.data.fullName}`)
            navigate('/login')

        } catch (error) {
            console.log(error);
        }


        setUser({
            fullName: "",
            username: "",
            password: "",
            confirmPassword: "",
            gender: ""
        })
    }

    return (
        <div className='xl:w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2'>
            <div className=' p-6 rounded-lg shadow-md bg h-full w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100' >
                <h1 className="text-3xl font-bold text-center text-gray-200">Sign up</h1>
                <form onSubmit={onSubmitHandler}>
                    <div className='p-3' >

                        <input value={user.fullName} onChange={(e) => setUser({ ...user, fullName: e.target.value })} className='w-full input input-bordered h-10 text-white' type="text" placeholder='Full Name' />
                    </div>
                    <div className='p-3' >
                        <input value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} className='w-full input input-bordered h-10 text-white' type="text" placeholder='username' />
                    </div>
                    <div className='p-3' >
                        <input value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} className='w-full input input-bordered h-10 text-white' type="password" placeholder='password' />
                    </div>
                    <div className='p-3' >
                        <input value={user.confirmPassword} onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })} className='w-full input input-bordered h-10 text-white' type="password" placeholder='confirm password' />
                    </div>
                    <div className="flex flex-auto justify-center text-center gap-4">
                        <label className='flex justify-center gap-1 text-white' >Male:
                            <input checked={user.gender === "male"} onChange={() => handleCheckBox("male")} type="checkbox" defaultChecked className="checkbox checkbox-success" />
                        </label>
                        <label className='flex justify-center gap-1 text-white'>Female:
                            <input checked={user.gender === "female"} onChange={() => handleCheckBox("female")} type="checkbox" defaultChecked className="checkbox checkbox-success" />
                        </label>
                    </div>
                    <div className='flex m-auto justify-center my-5 w-full h-10 text-white align-middle' >
                        <button type='submit' className='transition ease-in-out delay-150 bg-green-500 hover:-translate-y-1 hover:scale-20 hover:bg-green-800 duration-300 w-1/2 rounded-lg' >Sign up</button>
                    </div>
                    <div className='text-green-500 transition ease-in-out delay-200 hover:text-white' >
                        <Link to={"/login"} >Already have an account?</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup;