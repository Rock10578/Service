export const About = () => {
    return(
        <>
            <main>
            <section className="section-hero">
                <div className="container grid grid-two-cols">
                    <div className="hero-content">
                        <p>Welcome, Rock the Developer web</p>
                        <h1>Why Choose Us?</h1>
                        <p>Expertise: Our team consists of experience IT professionals who are passionate about staying up-to-date with the latest industry trends.</p>
                        <br/>
                        <p>Customization: We understand that every buisness is unique. That's why we create solutions that are tailored to your specific needs and goals.</p>
                        <br/>
                        <p>Affordability: We offer competitive pricing without compromising on the quality of our services.</p>
                        <br/>
                        <p>Reliability: Count on us to be there when you need us. We're committed to ensuring your IT environment is reliable and available 24/7.</p>
                        <br/>
                        <div className="btn btn-group">
                            <a href="/contact">
                                <button className="btn">Connect Now</button>
                            </a>
                            <a href="/service">
                                <button className="btn secondary-btn">Learn More</button>
                            </a>
                        </div>
                    </div>
                    <div className="her-image">
                        <img 
                            src="/images/about.png"
                            alt="coding together"
                            width="400"
                            height="500"
                        />
                    </div>
                </div>
            </section>
        </main>
        </>
    )
}