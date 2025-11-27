import "../styles/about.css"

export default function About(){
    return (

        <section className="about-section" id="about">
            {/* title */}
            <h2 className="about-title"> Who We Are </h2>
            <p className="about-subtitle">
                Fashion designed for confidence and comfort.
            </p>

            {/* feature cards */}
            <div className="about-wrapper">
                {/* card 1 */}
                <div className="about-card">
                    <div className="icon-circle">
                        <i className="ri-sparkling-line"></i>
                    </div>
                    <h3>Premium Quality </h3>
                    <p>
                        Crafted from the finest materials with exceptional attention to
                        detail and durability.
                    </p>
                </div>

                {/* card 2 */}
                <div className="about-card">
                    <div className="icon-circle">
                        <i className="ri-arrow-right-up-long-fill"></i>
                    </div>
                    <h3>Modern Designs</h3>
                    <p>
                        Contemporary styles that blend timeless elegance with the latest
                        fashion trends.
                    </p>
                </div>

                {/* card 3 */}
                <div className="about-card">
                    <div className="icon-circle">
                        <i className="ri-truck-line"></i>
                    </div>
                    <h3>Fast Delivery</h3>
                    <p>
                        Swift and secure shipping to bring your favorite pieces to your
                        doorstep quickly.
                    </p>
                </div>

                {/* card 4 */}
                <div className="about-card">
                    <div className="icon-circle">
                        <i className="ri-refresh-line"></i>
                    </div>
                    <h3>Easy Returns</h3>
                    <p>
                        Hassle-free return policy ensuring your complete satisfaction with
                        every purchase.
                    </p>
                </div>
            </div>
        </section>
    );
}