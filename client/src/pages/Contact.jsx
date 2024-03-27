import { useState } from "react";
import { useAuth } from "../store/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Contact = () => {
    const [contact,setContact] = useState({
        username:"",
        email:"",
        message:""
    })
    const [userData,setUserData] = useState(true);
    const {user} = useAuth();

    const navigate = useNavigate();
    
    if(userData && user){
        setContact({
            username: user.username,
            email: user.email,
            message: "",
        });
        setUserData(false);
    }

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value

        setContact({
            ...contact,
            [name]: value
        })   
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:4000/api/form/contact`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(contact)
            });
            if (response.ok){
                toast.success("Message send Successfully");
                navigate("/")
            } else{
                toast.error("Something went wrong while sending the message")
            }
        } catch (error) {
            console.log("Error from contact handleSubmit : ", error)
        }
    }


    return(
        <>
            <section className="section-contact">
                <div className="contact-content container">
                    <h1 className="main-heading">Contact us</h1>
                </div>
                <div className="container grid grid-two-cols">
                    <div className="contact-img">
                        <img
                            src="/images/support.png"
                            alt="We are always ready to help"
                            />
                    </div>

                    <section className="section-form">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="username">username</label>
                                <input 
                                    type="text" 
                                    name="username"
                                    id="username"
                                    autoComplete="off"
                                    placeholder="Enter Your Username"
                                    value={contact.username}
                                    onChange={handleInput}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email">email</label>
                                <input 
                                    type="email" 
                                    name="email"
                                    id="email"
                                    autoComplete="off"
                                    value={contact.email}
                                    placeholder="Enter your Email"
                                    onChange={handleInput}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message">message</label>
                                <textarea 
                                    name="message" 
                                    id="message" 
                                    autoComplete="off"
                                    placeholder="Please write your message....."
                                    value={contact.message}
                                    onChange={handleInput}
                                    required
                                    cols="30"
                                    rows="6"
                                ></textarea>
                            </div>
                            <div>
                                <button type="submit">Submit</button> 
                            </div>
                        </form>
                    </section>
                </div>

                <section className="mb-3">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.8488029730156!2d77.44338137570048!3d28.634293284000304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cee22c60837b7%3A0x7c35343eceb7bde0!2sABES%20Engineering%20College!5e0!3m2!1sen!2sin!4v1709801700355!5m2!1sen!2sin" 
                        width="100%" 
                        height="450" 
                        allowFullScreen
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </section>
            </section>
        </>
    )
}