import NavBar from "../Components/Home/NavBar";
import InfoTopBar from "../Components/Home/InfoTopBar";
import FullPageSlider from '../Components/Home/FullPageSlider'


const Home = () => {
    return (
        <>
            <div className="flex flex-col h-full">
                <InfoTopBar />
                <NavBar />
                <FullPageSlider />
            </div>
        </>
    );
};

export default Home;
