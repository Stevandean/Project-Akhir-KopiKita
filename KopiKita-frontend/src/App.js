import About from './components/About';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar'
import Pricing from './components/Topmenu';
import Support from './components/Promo'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Support />
      <Pricing />
      <Footer />
    </>
  );
}

export default App;
