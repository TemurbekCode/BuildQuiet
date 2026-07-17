import { useEffect, useState } from 'react'
import Splash from './components/Splash'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import Why from './components/Why'
import Work from './components/Work'
import Faq from './components/Faq'
import Contact from './components/Contact'
import Cta from './components/Cta'
import Footer from './components/Footer'
import './App.css'

const SPLASH_DURATION = 2800

function App() {
  const [splashHidden, setSplashHidden] = useState(false)
  const [siteShown, setSiteShown] = useState(false)

  useEffect(() => {
    const revealSite = (delay) => {
      const timer = setTimeout(() => {
        setSplashHidden(true)
        setSiteShown(true)
        document.body.classList.remove('loading')
        sessionStorage.setItem('bq_splash_seen', '1')
      }, delay)
      return () => clearTimeout(timer)
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setSplashHidden(true)
      setSiteShown(true)
      document.body.classList.remove('loading')
      return
    }

    const seen = sessionStorage.getItem('bq_splash_seen')
    const delay = seen ? 300 : SPLASH_DURATION

    if (document.readyState === 'complete') {
      return revealSite(delay)
    }

    let cleanup
    const onLoad = () => {
      cleanup = revealSite(delay)
    }
    window.addEventListener('load', onLoad)
    return () => {
      window.removeEventListener('load', onLoad)
      if (cleanup) cleanup()
    }
  }, [])

  return (
    <>
      <Splash hide={splashHidden} />
      <div id="site" className={siteShown ? 'show' : ''}>
        <Navbar />
        <Hero />
        <Problem />
        <Services />
        <HowItWorks />
        <Why />
        <Work />
        <Faq />
        <Contact />
        <Cta />
        <Footer />
      </div>
    </>
  )
}

export default App
