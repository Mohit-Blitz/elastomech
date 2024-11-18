import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import Clients from "../Components/Clients";
import InfoTopBar from "../Components/InfoTopBar";
import AboutSection from "../Components/AboutSection";
import FullPageSlider from "../Components/FullPageSlider";
import CounterSection from "../Components/CounterSection";
import ContactForm from "../Components/ContactForm";
import PeojectPage from "../Components/PeojectPage";

const Home = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <InfoTopBar />
        <NavBar />
        <div>
          <FullPageSlider />
          <AboutSection />
          <PeojectPage />
          <CounterSection />
          <Clients />
          <ContactForm />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
