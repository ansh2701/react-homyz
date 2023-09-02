import Carousel from "./components/Carousel"
import Companies from "./components/Companies"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import GetStarted from "./components/GetStarted"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Value from "./components/Value"

function App() {

  return (
    <div className="app">
      <div className="main">
        <div className="white-gradient" />
      <Header />
      <Hero />
      </div>
      <Companies />
      <Carousel />
      <Value />
      <Contact />
      <GetStarted />
      <Footer />
    </div>
  )
}

export default App
