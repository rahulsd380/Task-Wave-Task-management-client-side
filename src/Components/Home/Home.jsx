import Banner from "../Banner/Banner";
import Banner2 from "../Banner2/Banner2";
import Benefit from "../Benefit/Benefit";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";



const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Banner2></Banner2>
            <Benefit></Benefit>
            <Footer></Footer>
        </div>
    );
};

export default Home;