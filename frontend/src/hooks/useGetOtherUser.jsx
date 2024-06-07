import { useEffect } from 'react'
import axios from 'axios';

const useGetOtherUser = () => {

    useEffect(() => {
        const fetchOtherUsers = async () => {
            try {
                axios.defaults.withCredentials = true;
                const res = await axios.get('https://chat-app-api-umber.vercel.app/api/v1/users')
                console.log(res);
            } catch (error) {
                console.log(error);
            }
        }
        fetchOtherUsers()
    }, [])
}

export default useGetOtherUser