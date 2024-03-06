export const About = () => {
    return(
        <>
            <main>
            <section className="section-hero">
                <div className="container grid grid-two-cols">
                    <div className="hero-content">
                        <p>Welcome, Rock the Developer web</p>
                        <h1>Why Choose Us?</h1>
                        <p>
                            Expertise: Our team 
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
        </>
    )
}