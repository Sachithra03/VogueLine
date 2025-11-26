import "../styles/hero.css"
import mainImg from "../assets/hero-main.jpg";
import smallImg from "../assets/hero-small.jpg";

export default function Hero(){
    return (
        <section className="hero-section">

            {/* left content */}
            < div className="hero-left">
                <h1>Wear Your Confidence with <br />
                    <span className="brand-accent">VogueLine</span>
                </h1>

                <p>
                    Discover a world where modern fashion meets elegance.
                    At VogueLine, we curate the latest trends to help you express your unique style with confidence.
                </p>

                <button className="hero-btn"> Shop Now</button>
            </div>

            {/* right image */}
            <div className="hero-right">

                <div className="corner-line"></div>

                    <img src={mainImg} className="hero-main-img" alt="Fashion model" />
                    <img src={smallImg} className="hero-small-img" alt="Fashion small" />

            </div>

            {/* outline text */}
            <h2 className="outline-text"> CHASE THE LOOK</h2>

        </section>

    );
}