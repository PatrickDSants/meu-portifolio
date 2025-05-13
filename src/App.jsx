import HeroSection from "./components/HeroSection";
import SobreMimSection from "./components/SobreMimSection";
import ProjetosSection from "./components/ProjetosSection";
import LinksSection from "./components/LinksSection";
import Contato from "./components/ContatoSection";
import Footer from "./components/footerSection";

export default function App() {
  return (
    <div>
      <HeroSection />
      <SobreMimSection />
      <ProjetosSection />
      <LinksSection />
      <Contato />
      <Footer />
    </div>
  );
}
