import "../styles/navbar.css";

export default function Navbar(){
    return(
        <header className="navbar">
            <div className="nav-container">

                <div className="nav-logo">VogueLine</div>

                {/* Center-linkes */}
                <nav className="nav-links">
                    <a href="#hero"> Home</a>
                    <a href="#featured"> shop</a>
                    <a href="#about"> About</a>
                    <a href="#contact"> Contact</a>
                </nav>

                {/* Right icons */}
                <div className="nav-icons">
                    <i className="ri-search-line"></i>
                    <i className="ri-heart-line"></i>
                    <i className="ri-shopping-cart-line"></i>
                    <i className="ri-user-line"></i>
                </div>
            </div>
        </header>
    );
}