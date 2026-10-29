import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StyleSection from "./components/StyleSection";
import ProductSection from "./components/ProductSection";
import AboutSection from "./components/AboutSection";

function App() {
  return (
    <>
      <main>
        <Navbar />
        <Hero />
        <StyleSection />
        <ProductSection />
        <AboutSection />
      </main>
    </>
  );
}

export default App;
