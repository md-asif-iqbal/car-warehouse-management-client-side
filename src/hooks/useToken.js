import axios from "axios";
import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('');
    useEffect(() => {
        const getToken = async () => {
            console.log(user);
            const email = user?.user?.email;
            console.log(email);
            if (email) {
                const { data } = await axios.post('https://still-ocean-23705.herokuapp.com/login', {email});
                setToken(data.token);
                localStorage.setItem('token', data.token);
            }
        }
        getToken();
    }, [user]);
    return [token];
}

export default useToken;