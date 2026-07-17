export default function Hero() {
    return (
        <header className="hero" id="top">
            <div className="wrap">
                <div>
                    <h1>We build<span className="dot">.</span><br /><span className="quiet">Quietly.</span></h1>
                    <p>Buildquiet is the invisible dev team behind marketing agencies. Your brand on the invoice, our
                        code under the hood — custom websites and landing pages your clients will love.</p>
                    <div className="hero-cta">
                        <a className="btn btn-primary" href="#contact">Book a 15-min intro call</a>
                        <a className="btn btn-ghost" href="#work">See our work</a>
                    </div>
                    <div className="trust-line">
                        <span>— NDA on every project</span>
                        <span>— Fixed pricing</span>
                        <span>— Zero client poaching</span>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="mini-browser">
                        <div className="mb-bar">
                            <span className="mb-dot"></span><span className="mb-dot"></span><span className="mb-dot"></span>
                            <span className="mb-url"><span className="lock">🔒</span> staging.your-agency.com</span>
                        </div>
                        <div className="mb-body">
                            <div className="sk-nav">
                                <div className="sk-logo"></div>
                                <div className="sk-links"><i></i><i></i><i></i></div>
                            </div>
                            <div className="sk-hero-line w70"></div>
                            <div className="sk-hero-line w45"></div>
                            <div className="sk-btn"></div>
                            <div className="sk-cards"><i></i><i></i><i></i></div>
                        </div>
                    </div>
                    <span className="brand-tag">← your client's site</span>
                    <div className="float-card fc-1">
                        <span className="ic">✓</span>
                        <span><b>NDA signed</b><small>before any work starts</small></span>
                    </div>
                    <div className="float-card fc-2">
                        <span className="ic">$</span>
                        <span><b>Fixed quote — sent</b><small>within 48 hours</small></span>
                    </div>
                    <div className="float-card fc-3">
                        <span className="ic">↗</span>
                        <span><b>Staging link ready</b><small>under your brand</small></span>
                    </div>
                </div>
            </div>
        </header>
    )
}
