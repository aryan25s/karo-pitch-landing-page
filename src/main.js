import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import About from "./Component/About";
import HowItWorks from "./Component/HowItWorks";
import WhoCanApply from "./Component/WhoCanApply";
import Investors from "./Component/Investors";
import FeaturedStartups from "./Component/FeaturedStartups";
import AboutKaroStartup from "./Component/AboutKaroStartup";
import FinalCTA from "./Component/FinalCTA";
import Footer from "./Component/Footer";

function KaroPitchSite(){
    return(
        <>

            <Navbar/>
            <Hero/>
            <About/>
            <HowItWorks/>
            <WhoCanApply/>
            <Investors/>
            <FeaturedStartups/>
            <AboutKaroStartup/>
            <FinalCTA/>
            <Footer/>

        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<KaroPitchSite/>);