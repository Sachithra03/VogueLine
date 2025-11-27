import "../styles/footer.css";

export default function footer(){
    return(
        <section className="footer-section" id="footer">
        <footer className="footer">
            <div className="footer-container">

                {/* logo */}
                <h2 className="footer-logo">VogueLine</h2>

                {/* contact info */}
                <p className="footer-location">Colombo, Sri Lanka </p>
                <p className="footer-phone">+94 77 123 4567</p>
                <p className="footer-email">info@vogueline.com</p>

                {/* social media icons */}
                <div className="footer-socials">
                    <i className="ri-instagram-line"></i>
                    <i className="ri-facebook-line"></i>
                    <i className="ri-tiktok-line"></i>
                </div>

                {/* copyright */}
                <p className="footer-copy">© 2024 VogueLine. All rights reserved.</p>

            </div>
        </footer>
        </section>
    );
}
