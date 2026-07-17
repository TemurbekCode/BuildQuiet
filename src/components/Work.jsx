import malinaThumb from '../assets/work/malina.png'
import eilThumb from '../assets/work/eil.png'
import ravonpayThumb from '../assets/work/ravonpay.png'
import portfolioThumb from '../assets/work/portfolio.png'

const projects = [
    {
        title: 'Malina Market — E-commerce',
        desc: 'A fast, mobile-first online store with custom catalog and ordering flow.',
        tech: 'React · SCSS',
        href: 'https://malinamarket1.netlify.app/',
        thumb: malinaThumb,
    },
    {
        title: 'EIL Logistika — Export-import platform',
        desc: 'A bilingual (UZ/RU) platform connecting exporters and importers with logistics, customs, and training services.',
        tech: 'React',
        href: 'https://eilogistika.netlify.app/',
        thumb: eilThumb,
    },
    {
        title: 'RavonPay — Fintech web app',
        desc: 'A modern digital wallet for freelancers and businesses across Central Asia.',
        tech: 'React',
        href: 'https://ravonpay.netlify.app/',
        thumb: ravonpayThumb,
        badge: 'In progress',
    },
    {
        title: 'Developer Portfolio',
        desc: 'A personal portfolio site for a frontend developer, showcasing projects and skills.',
        tech: 'React',
        href: 'https://portfolio-temurbek.netlify.app/',
        thumb: portfolioThumb,
    },
]

export default function Work() {
    return (
        <section className="work" id="work">
            <div className="wrap">
                <p className="eyebrow">Recent builds</p>
                <h2 className="section-title">Quiet work, loud results</h2>
                <div className="work-grid">
                    {projects.map((project) => (
                        <a className="work-card" key={project.title} href={project.href} target="_blank" rel="noopener noreferrer">
                            <div className="work-thumb">
                                <img src={project.thumb} alt={project.title} />
                                {project.badge && <span className="work-badge">{project.badge}</span>}
                            </div>
                            <div className="work-info">
                                <h3>{project.title}</h3>
                                <p>{project.desc}</p>
                                <span className="tech">{project.tech}</span>
                            </div>
                        </a>
                    ))}
                </div>
                <p className="tech-line">Most of these builds still run on their Netlify staging subdomains — we're a
                    new studio, and website culture is only just catching on in the Uzbek market, so early clients
                    haven't bought a custom domain yet. Swapping one in takes minutes once they're ready.</p>
            </div>
        </section>
    )
}
