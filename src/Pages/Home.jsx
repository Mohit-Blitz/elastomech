import NavBar from "../Components/Home/NavBar";
import InfoTopBar from "../Components/Home/InfoTopBar";
import FullPageSlider from '../Components/FullPageSlider'


const Home = () => {
    return (
        <>
            <div className="h-full">
                <InfoTopBar />
                <NavBar />
            </div>
        </>
    );
};

export default Home;
