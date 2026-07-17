import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const EMAILJS_SERVICE_ID = 'service_a8d852d'
const EMAILJS_TEMPLATE_ID = 'template_bqk9d0f'
const EMAILJS_PUBLIC_KEY = 'jUy_y9jB4kOIDYW3O'
const ADMIN_EMAIL = 'temurbekalisherov82@gmail.com'

export default function Contact() {
    const formRef = useRef(null)
    const [status, setStatus] = useState('idle') // idle | sending | sent | error

    const handleSubmit = (e) => {
        e.preventDefault()
        setStatus('sending')
        emailjs
            .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY)
            .then(() => {
                setStatus('sent')
                formRef.current.reset()
            })
            .catch(() => setStatus('error'))
    }

    return (
        <section className="contact" id="contact">
            <div className="wrap">
                <div className="contact-grid">

                    {/* Chap: ma'lumot */}
                    <div className="contact-info">
                        <p className="eyebrow">Contact</p>
                        <h2 className="section-title">Tell us about your next project</h2>
                        <p className="section-sub">Prefer email over calls? Send us the details — we'll reply with questions or a fixed quote within 48 hours.</p>

                        <div className="item">
                            <span className="ic">✉</span>
                            <div>
                                <h3>Email</h3>
                                <a href="mailto:hello@buildquiet.com">hello@buildquiet.com</a>
                                <p style={{ fontSize: '12.5px', marginTop: '2px' }}>Every message is routed straight to our main admin</p>
                            </div>
                        </div>
                        <div className="item">
                            <span className="ic">◷</span>
                            <div>
                                <h3>Working hours</h3>
                                <p>Mon–Fri · overlapping EU mornings<br />and US East Coast mornings (UTC+5)</p>
                            </div>
                        </div>
                        <div className="item">
                            <span className="ic">◈</span>
                            <div>
                                <h3>Prefer a call?</h3>
                                <a href="#">Book a 15-min intro call →</a>
                            </div>
                        </div>

                        <span className="response-badge">
                            <span className="pulse"></span>
                            avg. response time: under 24 hours
                        </span>
                    </div>

                    {/* O'ng: forma — EmailJS orqali yuboriladi */}
                    <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
                        <input type="hidden" name="to_email" value={ADMIN_EMAIL} />
                        <input type="hidden" name="to_name" value="Main Admin" />

                        <div className="form-row">
                            <div className="field">
                                <label htmlFor="cf-name">Your name</label>
                                <input id="cf-name" type="text" name="name" placeholder="Jane Smith" required />
                            </div>
                            <div className="field">
                                <label htmlFor="cf-agency">Agency name</label>
                                <input id="cf-agency" type="text" name="agency" placeholder="Acme Marketing" />
                            </div>
                        </div>

                        <div className="field">
                            <label htmlFor="cf-email">Work email</label>
                            <input id="cf-email" type="email" name="email" placeholder="jane@acmemarketing.com" required />
                        </div>

                        <div className="field">
                            <label htmlFor="cf-type">Project type</label>
                            <select id="cf-type" name="project_type">
                                <option>Marketing website</option>
                                <option>Landing page</option>
                                <option>Web app / dashboard</option>
                                <option>Ongoing maintenance</option>
                                <option>Not sure yet — let's talk</option>
                            </select>
                        </div>

                        <div className="field">
                            <label htmlFor="cf-message">Project details</label>
                            <textarea id="cf-message" name="message" placeholder="Tell us about the project: scope, timeline, budget range if you have one. Designs ready? Even better." required></textarea>
                        </div>

                        <button className="btn btn-green" type="submit" disabled={status === 'sending'}>
                            {status === 'sending' ? 'Sending…' : 'Send message'}
                        </button>

                        {status === 'sent' && (
                            <p className="form-note">Thanks — your message is in. We'll reply within 24 hours.</p>
                        )}
                        {status === 'error' && (
                            <p className="form-note">Something went wrong — email us directly at <a href="mailto:hello@buildquiet.com">hello@buildquiet.com</a>.</p>
                        )}
                        {status !== 'sent' && status !== 'error' && (
                            <p className="form-note">NDA before we start? Of course — <a href="mailto:hello@buildquiet.com">just ask</a>.</p>
                        )}
                    </form>

                </div>
            </div>
        </section>
    )
}
