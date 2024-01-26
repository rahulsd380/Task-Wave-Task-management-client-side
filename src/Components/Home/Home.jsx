import { Helmet } from "react-helmet-async";
import AppDownloadBanner from "../AppDownloadBanner/AppDownloadBanner";
import Banner2 from "../Banner2/Banner2";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";



const Home = () => {
    return (
        <div>
            <Helmet>
              <title>Task Wave | Home</title>
          </Helmet>
            <Navbar></Navbar>
            <Hero></Hero>
            <Banner2></Banner2>
            <AppDownloadBanner></AppDownloadBanner>
            <Banner></Banner>
            <Footer></Footer>
        </div>
    );
};

export default Home;