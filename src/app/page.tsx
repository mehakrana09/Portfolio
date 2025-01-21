import Header from './components/Header'
import About from './components/About'
import Tabs from './components/Tabs'
import Contact from './components/Contact'
import Footer from './components/Footer'
// import Projects from './components/Projects'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-300">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <About resumeUrl="https://drive.google.com/file/d/13PC14ms0CoBMCh8eOrhKPfqkw7AmHowB/view?usp=drive_link" />
        <Tabs />
        <Contact />
        {/* <Projects projectUrl="https://drive.google.com/file/d/10n2EL-eayBLq8_98O48tRDvj0m6q-wGq/view?usp=drive_link"/> */}
      </main>
      <Footer />
    </div>
  )
}

