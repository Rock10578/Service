import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [user, setUser] = useState("");
    const [services, setServices] = useState("");

    const storeTokenInLS = (serverToken) => {
        return localStorage.setItem('token',serverToken)
    }

    let isLoggedIn = !!token;
    // console.log("isLogedIn",isLoggedIn)

    // tackling the logout functionality
    const LogoutUser = () => {
        setToken("");
        return localStorage.removeItem('token');
    }

    // JWT Authentication - to get currently logged in user data
    const userAuthentication = async () => {
        try {
            const response = await fetch("http://localhost:4000/api/auth/user", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })

            if(response.ok) {
                const data = await response.json();
                console.log("user data :",data.userData)
                setUser(data.userData)
            }
        } catch (error) {
            console.log("Error fetching user data")
        }
    }

    // To fetch the services from the database
    const getServices = async () => {
        try {
            const response = await fetch(`http://localhost:4000/api/data/service`, {
                method: "GET",
            });
            if (response.ok){
                const data = await response.json();
                console.log(data.msg);
                setServices(data.msg);
            }
        } catch (error) {
            
        }
    }

    useEffect(() => {
        getServices();
        userAuthentication();
    }, []);

    return (
        <AuthContext.Provider value={{ isLoggedIn, storeTokenInLS, LogoutUser, user, services }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    // As a consumer containing all data
    const authContextValue = useContext(AuthContext);
    if (!authContextValue){
        throw new Error("useAuth used outside of the Provider");
    }
    return authContextValue;
}