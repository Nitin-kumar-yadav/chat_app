import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { setAuthUser } from '../redux/userSlice'

const Login = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleLogin = async (e) => {
        e.preventDefault()


        try {

            if (!password || !username) {
                toast.error("Please fill all fields")
                setPassword("")
                setUsername("")
                return
            }
            const response = await axios.post('https://chat-app-api-umber.vercel.app/api/v1/users/login',
                {
                    username,
                    password
                },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
            if (!response) {
                toast.error("Failed to login")
            }
            dispatch(setAuthUser(response.data))
            toast.success(`Welcome, ${response.data.fullName}`)
            localStorage.getItem('user-token', response)
            console.log(response)
            navigate("/")
        } catch (error) {
            toast.error("Email or password is incorrect")
            console.log(error)
        }

        setPassword("")
        setUsername("")

    }

    return (
        <div className='xl:w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2'>
            <div className=' p-6 rounded-lg shadow-md bg h-full w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100' >
                <h1 className="text-3xl font-bold text-center text-gray-200">Login</h1>
                <form onSubmit={handleLogin} >
                    <div className='p-3' >
                        <input value={username} onChange={(e) => setUsername(e.target.value)} className='w-full input input-bordered h-10 text-white' type="text" placeholder='username' />
                    </div>
                    <div className='p-3' >
                        <input value={password} onChange={(e) => setPassword(e.target.value)} className='w-full input input-bordered h-10 text-white' type="password" placeholder='password' />
                    </div>
                    <div className='flex m-auto justify-center my-5 w-full h-10 text-white align-middle' >
                        <button type='submit' className='transition ease-in-out delay-150 bg-green-500 hover:-translate-y-1 hover:scale-20 hover:bg-green-800 duration-300 w-1/2 rounded-lg' >Login</button>
                    </div>
                    <div className='text-green-500 transition ease-in-out delay-200 hover:text-white' >
                        <Link to={"/signup"} >Don't have an account?</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login