import "./App.css";
import { AboutUs } from "./components/AboutUs";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroComponent from "./components/Hero";
import MissionVision from "./components/MissionVision";
import OurInterior from "./components/OurInterior";
import OurMenuCategories from "./components/OurMenuCategories";
import WelcomeTo from "./components/WelcomeTo";
import "./styles/fonts.css";

function App() {
  return (
    <div>
      <Header />
      <HeroComponent />
      <WelcomeTo />
      <AboutUs />
      <OurMenuCategories />
      <OurInterior />
      <MissionVision />
      <Cta />
      <Footer />
    </div>
  );
}

export default App;
