export default function Faq() {
    return (
        <section id="faq">
            <div className="wrap">
                <p className="eyebrow">FAQ</p>
                <h2 className="section-title">Questions agencies ask us</h2>
                <div className="faq-list">
                    <details open>
                        <summary>Will you ever contact our clients?</summary>
                        <p>Never. Every partnership starts with an NDA, and our no-poaching commitment is written into
                            it. Our entire business depends on your trust.</p>
                    </details>
                    <details>
                        <summary>How does pricing work?</summary>
                        <p>Flat, fixed quotes per project — sent within 48 hours of receiving your brief. No hourly
                            billing surprises. Volume partners get priority scheduling and better rates.</p>
                    </details>
                    <details>
                        <summary>Who owns the code?</summary>
                        <p>You (or your client) own 100% of the code, designs, and assets. We keep nothing.</p>
                    </details>
                    <details>
                        <summary>What if we need changes after launch?</summary>
                        <p>Two revision rounds are included in every build. After launch, you can hand the site to your
                            team or add our white-label maintenance plan.</p>
                    </details>
                    <details>
                        <summary>What about time zones?</summary>
                        <p>We're in Tashkent (UTC+5). Our workday overlaps with European mornings and US East Coast
                            mornings, and we respond to everything within one business day.</p>
                    </details>
                    <details>
                        <summary>Can you work from our designs?</summary>
                        <p>Absolutely — Figma, XD, or Sketch. No designs? We can handle design too, still under your
                            brand.</p>
                    </details>
                </div>
            </div>
        </section>
    )
}
