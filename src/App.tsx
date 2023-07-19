import Instagram from "./components/Instagram"
import AboutUs from "./components/aboutUs"
import BestSellers from "./components/bestSellers"
import Diamond from "./components/diamond"
import Footer from "./components/footer"
import Hero from "./components/hero"
import New from "./components/new"
import Signature from "./components/signature"
import Trending from "./components/trending"


function App() {

  return (
    <div className="">
      <Hero />
      <New />
      <Diamond />
      <BestSellers />
      <AboutUs />
      <Signature />
      <Trending />
      <Instagram />
      <Footer />
    </div>
  )
}

export default App