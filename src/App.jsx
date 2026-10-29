import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StyleSection from "./components/StyleSection";
import ProductSection from "./components/ProductSection";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StyleSection />
        <ProductSection />
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
