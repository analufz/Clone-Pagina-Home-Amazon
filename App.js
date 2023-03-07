import Navbar from "./components/Navbar";
import Add from "./components/Add";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Deals from "./components/Deals";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#eaeded]">
      {/* Navbar */}
      <Navbar />
      {/* Add */}
      <Add />
      {/* Hero */}
      <Hero />
      {/* Products */}
      <Products />
      {/* Deals */}
      <Deals />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
