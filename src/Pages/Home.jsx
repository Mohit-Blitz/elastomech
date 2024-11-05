import NavBar from "../Components/Home/NavBar";
import InfoTopBar from "../Components/Home/InfoTopBar";
import FullPageSlider from '../Components/Home/FullPageSlider'
import AboutSection from "../Components/Home/AboutSection";


const Home = () => {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <InfoTopBar />
                <NavBar />
                <div>
                    <FullPageSlider />
                    <AboutSection />
                </div>
            </div>
        </>
    );
};


export default Home;
