import Feature from './components/Feature'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Model from './components/Model'
import Navbar from './components/Navbar'
import HowItWorks from './components/HowItWorks'
import * as Sentry from '@sentry/react'

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Feature />
      <HowItWorks />
    </main>
  )
}

export default Sentry.withProfiler(App)
