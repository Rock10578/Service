import { useState } from "react";
import { useAuth } from "../store/auth";

export const Contact = () => {

    const [contact,setContact] = useState({
        username:"",
        email:"",
        message:""
    })

    const [userData,setUserData] = useState(true);

    const {user} = useAuth();

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

        // 2nd method 
        // setContact((prev) => ({
        //     ...prev,
        //     [name]: value,
        // }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // alert(user);
        console.log(contact)
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
                        allowfullscreen
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </section>
            </section>
        </>
    )
}