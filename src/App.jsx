import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeatureSection from "./components/FeatureSection";
import WorkFlow from "./components/workFlow";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen text-white">
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6 lg:px-20">
        <Hero />
        <FeatureSection />
        <WorkFlow />
        <Pricing />
        <Testimonials />
        <Footer />
      </div>
    </div>
  )
}

export default App