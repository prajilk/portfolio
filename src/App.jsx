import "./App.css";
import AboutSection from "./Components/AboutSection";
import ContactSection from "./Components/ContactSection";
import FooterSection from "./Components/FooterSection";
import HeaderSection from "./Components/HeaderSection";
import DrawerAppBar from "./Components/Nav";
import PortfolioSection from "./Components/PortfolioSection";
import WorkSection from "./Components/WorkSection";

function App() {
    return (
        <div className="App">
            <DrawerAppBar />
            <HeaderSection />
            <AboutSection />
            <WorkSection />
            <PortfolioSection />
            <ContactSection />
            <FooterSection />
        </div>
    );
}

export default App;
