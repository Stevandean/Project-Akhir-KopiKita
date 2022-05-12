import About from './components/About';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar'
import Pricing from './components/Topmenu';
import Support from './components/Promo';
import Makanan from './components/Makanan';
import Minuman from './components/Minuman';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Support />
      <Pricing />
      <Makanan />
      <Minuman />
      <Footer />
    </>
  );
}

export default App;
