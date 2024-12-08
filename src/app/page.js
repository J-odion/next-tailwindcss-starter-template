import Navbar from "./component/Header";
import Hero from "./component/Herosection";
import InfoTop from "./component/InfoTop";
import FooterSection from "./component/Footer";


export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <InfoTop />
      <FooterSection />
    </div>
  );
}
