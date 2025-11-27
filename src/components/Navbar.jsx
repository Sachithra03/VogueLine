import "../styles/navbar.css";

export default function navbar(){
    return(
        <header className="navbar">
            <div className="nav-container">

                <a href="#hero" className="nav-logo">VogueLine</a>

                {/* Center-linkes */}
                <nav className="nav-links">
                    <a href="#hero"> Home</a>
                    <a href="#featured"> shop</a>
                    <a href="#about"> About</a>
                    <a href="#footer"> Contact</a>
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