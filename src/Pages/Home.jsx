import NavBar from "../Components/NavBar";
import InfoTopBar from "../Components/InfoTopBar";
import FullPageSlider from "../Components/FullPageSlider";
import AboutSection from "../Components/AboutSection";
import CounterSection from "../Components/CounterSection";
import Footer from "../Components/Footer";
import ContactForm from "../Components/ContactForm";

const Home = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <InfoTopBar />
        <NavBar />
        <div>
          <FullPageSlider />
          <AboutSection />
          <CounterSection />
          <ContactForm />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
