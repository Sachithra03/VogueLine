import "../styles/featured.css";

import img1 from "../assets/featured-1.png";
import img2 from "../assets/featured-2.png";
import img3 from "../assets/featured-3.png";

export default function featured(){
    return (

        <section className="featured-section" id="featured">

            {/* title */}
            <h2 className="featured-title"> Featured Collections</h2>
            <p className="featured-subtitle">
                Explore our curated selections of premium faction pieces
            </p>

            {/* featured cards */}

            <div className="featured-wrapper">

                {/* card 1 */}
                <div className="featured-card">
                    <img src= {img1} alt="new Arrivals" className="featured-img" />
                    <h3>New Arrivals</h3>
                    <p>Discover the latest trends and styles for the season</p>
                    <button className="featured-btn"> Shop Now</button>
                </div>

                {/* card 2 */}
                <div className="featured-card">
                    <img src= {img2} alt="Men's Collection" className="featured-img" />
                    <h3>Men's Collection</h3>
                    <p>Sophisticated essentials for the modern gentleman</p>
                    <button className="featured-btn"> Shop Now</button>
                </div>

                {/* card 3 */}
                <div className="featured-card">
                    <img src= {img3} alt="Women's Collection" className="featured-img" />
                    <h3>Women's Collection</h3>
                    <p>Elegant and stylish pieces for the modern woman</p>
                    <button className="featured-btn"> Shop Now</button>
                </div>

            </div>
        </section>

    );
}