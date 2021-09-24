import { useState, useEffect } from "react";
import api from "./../service/api"
import history from './../history/history';

export default function useAuth() {


    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
            setAuthenticated(true);
        }

        setLoading(false);
    }, [])

    async function handleLogin() {
        const { data: { token } } = await api.post('/api/auth');
        localStorage.setItem('token', JSON.stringify(token))
        api.defaults.headers.Authorization = `Bearer ${token}`;
        setAuthenticated(true);
        history.push("/users")
    }

    function handleLogout() {
        localStorage.removeItem('token')
        api.defaults.headers.Authorization = undefined;
        setAuthenticated(false);
        history.push("/login")
    }

    return { authenticated, loading, handleLogin, handleLogout };
}