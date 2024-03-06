export const Home = () => {
    return(<>
        <main>
            <section className="section-hero">
                <div className="container grid grid-two-cols">
                    <div className="hero-content">
                        <p>We are the World Best Software Developer</p>
                        <h1>Welcome to Rock Service Website</h1>
                        <p>
                            Are you ready to take your buisness to the next level with cutting-edge IT solutions? Look no further! At Rock Software Developer, we specialize in providing innovative IT services and solutions tailored to meet your unique needs.
                        </p>
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
                            src="/images/home.png"
                            alt="coding together"
                            width="400"
                            height="500"
                        />
                    </div>
                </div>
            </section>
        </main>

        <section className="section-analytics">
            <div className="container grid grid-four-cols">
                <div className="div1">
                    <h2>50+</h2>
                    <p>registered companies</p>
                </div>
                <div className="div1">
                    <h2>100,00</h2>
                    <p>Happy Clients</p>
                </div>
                <div className="div1">
                    <h2>500+</h2>
                    <p>Well known Developers</p>
                </div>
                <div className="div1">
                    <h2>24/7</h2>
                    <p>Service</p>
                </div>
            </div>
        </section>

        <section className="section-hero">
                <div className="container grid grid-two-cols">
                <div className="her-image">
                        <img 
                            src="/images/design.png"
                            alt="coding together"
                            width="400"
                            height="500"
                        />
                    </div>
                    <div className="hero-content">
                        <p>We are here to help you</p>
                        <h1>Get Started Today</h1>
                        <p>
                            Ready to take the first step towards a more efficient and secure IT infrastructure? Contact us today for a free consultation and let's discuss how Rock the Developer can help your buisness thrive in the digital age.
                        </p>
                        <div className="btn btn-group">
                            <a href="/contact">
                                <button className="btn">Connect Now</button>
                            </a>
                            <a href="/service">
                                <button className="btn secondary-btn">Learn More</button>
                            </a>
                        </div>
                    </div>
                </div>
        </section>
        </>
    )
}