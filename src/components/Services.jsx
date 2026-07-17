export default function Services() {
    return (
        <section id="services">
            <div className="wrap">
                <p className="eyebrow">Services</p>
                <h2 className="section-title">What we build for your clients</h2>
                <div className="services-grid">
                    <div className="service-card">
                        <span className="num">/01</span>
                        <h3>Marketing websites</h3>
                        <p>Fast, modern, conversion-focused business websites. Built custom or on WordPress/Webflow —
                            whatever fits your client's needs and budget.</p>
                    </div>
                    <div className="service-card">
                        <span className="num">/02</span>
                        <h3>Landing pages</h3>
                        <p>Campaign-ready landing pages for your PPC and social clients. Optimized for speed and
                            conversions, delivered in days, not weeks.</p>
                    </div>
                    <div className="service-card">
                        <span className="num">/03</span>
                        <h3>Web apps &amp; dashboards</h3>
                        <p>React-based web applications, client portals, and admin dashboards for projects that go
                            beyond a simple website.</p>
                    </div>
                    <div className="service-card">
                        <span className="num">/04</span>
                        <h3>Ongoing care</h3>
                        <p>White-label maintenance, updates, and performance monitoring — recurring revenue for you,
                            peace of mind for your clients.</p>
                    </div>
                </div>
                <p className="tech-line">React <span>·</span> Next.js <span>·</span> WordPress <span>·</span> Webflow
                    <span>·</span> SCSS <span>·</span> Node.js</p>
            </div>
        </section>
    )
}
