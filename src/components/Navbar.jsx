export default function Navbar() {
    return (
        <nav>
            <div className="wrap nav-inner">
                <a className="logo" href="#top">
                    <svg width="26" height="26" viewBox="0 0 30 30" aria-hidden="true">
                        <rect x="2" y="15" width="16" height="12" rx="2.5" fill="#151613" />
                        <rect x="12" y="3" width="16" height="12" rx="2.5" fill="#0F6E56" />
                    </svg>
                    <span className="logo-text">build<span className="q">quiet</span></span>
                </a>
                <div className="nav-links">
                    <a href="#services">Services</a>
                    <a href="#how">How it works</a>
                    <a href="#work">Work</a>
                    <a href="#faq">FAQ</a>
                    <a className="btn btn-green small" href="#contact">Book a call</a>
                </div>
            </div>
        </nav>
    )
}
