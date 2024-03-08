import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../store/auth"

export const Login = () => {
    const [user,setUser] = useState({
        email:"",
        password:""
    })

    const navigate = useNavigate()

    const { storeTokenInLS } = useAuth();

    const handleInput = (e) => {
        console.log(e)
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch(`http://localhost:4000/api/auth/login`,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user)
            });
        if(response.ok){
            // Storing Token in local storage
            const res_data = await response.json();
            console.log(res_data.token);
            storeTokenInLS(res_data.token);

            setUser({ email:"", password:"" })
            navigate("/")
        }
        } catch (error) {
            console.log("Login : ",error)
        }
        
    }

    return <>
        <section>
            <main>
                <div className="section-registration">
                    <div className="container grid grid-two-cols">
                        <div className="registration-image">
                            <img
                                src="/images/login.png"
                                alt="A man login himself"
                                width="500"
                                height="500"
                            />
                        </div>
                        <div className="registration-form">
                            <h1 className="main-heading mb-3">Login Form</h1>
                            <br/>

                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="email">email</label>
                                    <input
                                        type="text"
                                        name="email"
                                        placeholder="Enter your email"
                                        id="email"
                                        required
                                        autoComplete="off"
                                        value={user.email}
                                        onChange={handleInput}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password">password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Enter your password"
                                        id="password"
                                        required
                                        autoComplete="off"
                                        value={user.password}
                                        onChange={handleInput}
                                    />
                                </div>
                                <br/>
                                <button type="submit" className="btn btn-submit">Login Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    </>
}