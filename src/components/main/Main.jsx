import React, { useEffect, useRef, useState } from "react";
import './css/main.css'
import img1 from '../../assets/images/nav-bg-img-1.png'
import { CraftSvg } from "../svgs/CustomSvg";
import Navigation from "../navigation/Navigation";
import AboutUs from "./about/AboutUs";
import Services from "./services/Services";
import OurWorks from "./ourWorks/OurWorks";
import Footer from "../footer/Footer";
import CompanyClients from "./companyClients/CompanyClients";
import { useNavigate } from "react-router-dom";



const backgroundClasses = ["nav-bg-img-1", "nav-bg-img-2", "nav-bg-img-3"];

export default function Main(){

    const aboutUsDiv = useRef(null)
    const servicesDiv = useRef(null)
    const ourWorksDiv = useRef(null)
    const footerRef = useRef(null)

    const [currentBgIndex, setCurrentBgIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgroundClasses.length);
      }, 4000);
  
      return () => clearInterval(interval);
    }, []);    

    const scrollToAboutUs = () => {
        aboutUsDiv.current?.scrollIntoView({
            behavior: "smooth", 
            block: "start",
        })        

        return;
    }

    const scrollToServices = () => {
        servicesDiv.current?.scrollIntoView({
            behavior: "smooth", 
            block: "start",
        })        

        return;
    }

    const scrollToOurWorks = () => {
        ourWorksDiv.current?.scrollIntoView({
            behavior: "smooth", 
            block: "start",
        })        

        return;
    }

    const scrollToFooter = () => {
        footerRef.current?.scrollIntoView({
            behavior: "smooth", 
            block: "start",
        })        

        return;
    }    

    return(
        <div>
            <div className={`nav-container-bg bg-img background-container ${backgroundClasses[currentBgIndex]} p-lg-5 p-md-3 p-3 py-3`}>

                <div 
                    style={{
                        borderRadius: '40px'
                    }}
                    className="fixed-top mb-5 my-3 mx-3 bg-000"
                >
                    <Navigation 
                        scrollToAboutUs={scrollToAboutUs}
                        scrollToServices={scrollToServices}
                        scrollToOurWorks={scrollToOurWorks}
                        scrollToFooter={scrollToFooter}
                    />
                </div>

                <div style={{ gap: '5px' }} className="d-flex my-5 py-5 flex-wrap align-items-start justify-content-between">
                    <div className="col-lg-6 col-md-12 col-12 mb-lg-0 mb-md-4 mb-4">
                        <h1 className="m-0 p-0 mb-1 font-family-DmSans fw-700 txt-FFF txt-50">
                            Building the future, One Beam at a Time.    
                        </h1>
                        <p className="m-0 p-0 txt-FFF font-family-DmSans fw-600 txt-16 mb-4">
                            At KK Roland, we combine innovation, precision, and sustainable engineering to construct 
                            structures that shape tomorrow’s world with strength and reliability—one project, one beam, 
                            and one foundation at a time.                            
                        </p>
                        <div style={{ gap: '30px' }} className="d-flex align-items-center">
                            <button
                                style={{
                                    borderRadius: '6px'
                                }}
                                className="bg-E37A16 px-4 py-2 font-family-DmSans fw-600 txt-FFF txt-15"
                            >
                                Our Services
                            </button>
                            <p 
                                style={{
                                    textDecorationLine: 'underline'
                                }}
                                className="m-0 p-0 clickable font-family-DmSans txt-FFF fw-600 txt-15"
                            > 
                                Contact Us
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-5 col-md-12 col-12 py-5">
                        <div className="d-flex mb-5 align-items-center justify-content-end">
                            <div
                                style={{
                                    border: '1px solid #FFF',
                                    borderRadius: '20px'
                                }}
                                className="py-4 px-4"
                            >
                                <p className="m-0 p-0 mb-2 font-family-DmSans fw-600 txt-FFF txt-17">
                                    100+
                                </p>
                                <p className="m-0 p-0 mb-2 font-family-DmSans fw-400 txt-FFF txt-15">
                                    Satisfied Clients
                                </p>  
                                <div>
                                    <img src={img1} />
                                </div> 
                            </div>
                        </div>

                        <div
                            style={{
                                borderRadius: '15px',
                                backgroundColor: "rgba(255, 255, 255, 0.20)"                              
                            }}
                            className="p-4"
                        >
                            <div className="mb-3">
                                <CraftSvg />
                            </div>
                            <div className="mb-4">
                                <h2 className="m-0 p-0 txt-FFF font-family-DmSans fw-600 txt-15">
                                    Crafting Skyscrapers, Bridging Communities
                                </h2>
                            </div>
                            <div>
                                <p className="m-0 p-0 txt-FFF font-family-DmSans fw-500 txt-14">
                                    We build towering structures and reliable infrastructure that connect communities, 
                                    driven by precision, innovation, and lasting excellence.                                    
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-lg-5 py-md-3 py-3 my-5">
                <CompanyClients />
            </div>

            <div ref={aboutUsDiv} className="p-lg-5 p-md-3 p-3">
                <AboutUs />
            </div>

            <div ref={servicesDiv} className="p-lg-5 p-md-3 p-3">
                <Services />
            </div>       

            <div ref={ourWorksDiv} className="p-lg-5 p-md-3 p-3">
                <OurWorks />
            </div>  

            <div ref={footerRef}>
                <Footer />                      
            </div>
        </div>
    )
}