export default function Footer() {
    return (
        <footer>
            <div className="wrap footer-inner">
                <div className="footer-left">
                    <a className="logo" href="#top">
                        <svg width="22" height="22" viewBox="0 0 30 30" aria-hidden="true">
                            <rect x="2" y="15" width="16" height="12" rx="2.5" fill="#151613" />
                            <rect x="12" y="3" width="16" height="12" rx="2.5" fill="#0F6E56" />
                        </svg>
                        <span className="logo-text" style={{ fontSize: '17px' }}>build<span className="q">quiet</span></span>
                    </a>
                    <p>A white-label web development studio.<br />Tashkent, Uzbekistan · Working worldwide · © 2026
                        Buildquiet</p>
                </div>
                <div className="footer-links">
                    <a href="mailto:hello@buildquiet.com">hello@buildquiet.com</a>
                    <a href="#">LinkedIn</a>
                </div>
            </div>
        </footer>
    )
}
