import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

export const Register = () => {
    const [user,setUser] = useState({
        username:"",
        password:"",
        email:"",
        phone:""
    })

    const navigate = useNavigate();
    
    const { storeTokenInLS } = useAuth();

    const handleInput = (e) => {
        console.log(e)
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user, //Spread operator
            [name]: value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user)
        try {
            const response = await fetch(`http://localhost:4000/api/auth/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            })

            if (response.ok){

                // Store data in local storage
                const res_data = await response.json();
                console.log("Res from server", res_data)
                storeTokenInLS(res_data.token);


                setUser({ username:"", password:"", email:"", phone:"" });
                navigate("/login")
            }
        } catch (error) {
            console.log("Register : ", error)
        }
    }
    return <>
        <section>
            <main>
                <div className="section-registration">
                    <div className="container grid grid-two-cols">
                        <div className="registration-image">
                            <img
                                src="/images/register.png" 
                                alt="A girl registring herself"
                                width="500"
                                height="500"
                            />
                        </div>
                        <div className="registration-form">
                            <h1 className="main-heading mb-3">Registration Form</h1>
                            <br/>

                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="username">username</label>
                                    <input 
                                        type="text" 
                                        name="username" 
                                        placeholder="username" 
                                        id="username"
                                        required
                                        autoComplete="off"
                                        value={user.username}
                                        onChange={handleInput}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password">password</label>
                                    <input 
                                        type="password" 
                                        name="password" 
                                        placeholder="password" 
                                        id="password"
                                        required
                                        autoComplete="off"
                                        value = {user.password}
                                        onChange={handleInput}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email">email</label>
                                    <input 
                                        type="text" 
                                        name="email" 
                                        placeholder="Enter Your email" 
                                        id="email"
                                        required
                                        autoComplete="off"
                                        value = {user.email}
                                        onChange={handleInput}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone">phone</label>
                                    <input 
                                        type="number" 
                                        name="phone" 
                                        placeholder="Enter your phone no" 
                                        id="phone"
                                        required
                                        autoComplete="off"
                                        value = {user.phone}
                                        onChange={handleInput}
                                    />
                                </div>
                                <br/>
                                <button type="submit" className="btn btn-submit">Register Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    </>
}