import React, { useState } from "react";
import logo1 from '../../assets/images/logo_1.png'
import { BsMenuButton } from "react-icons/bs";
import { Offcanvas } from "react-bootstrap";
import { GiCancel } from "react-icons/gi";
import { useNavigate } from "react-router-dom";




export default function Navigation({ scrollToAboutUs, scrollToServices, scrollToFooter, scrollToOurWorks }){

    const navigate = useNavigate()
    const navigateTo = (path, data) => navigate(path)
    const goToCondoTracking = () => navigateTo('/condo-tracking')

    const navLinks = [
        {
            title: 'Home'
        },
        {
            title: 'About us',
            clickEvt: scrollToAboutUs
        },
        {
            title: 'Portfolio',
            clickEvt: scrollToOurWorks
        },
        {
            title: 'Services',
            clickEvt: scrollToServices
        },
    ]    

    const [showOffcanvasNav, setShowOffcanvasNav] = useState(false)

    const openOffCanvasNav = () => setShowOffcanvasNav(true)
    const hideOffCanvasNav = () => setShowOffcanvasNav(false)

    const displayNavLinks = navLinks.map((navlink, i) => {
        const { title, clickEvt } = navlink

        const handleNavClick = () => {
            if(clickEvt){
                clickEvt()
            }

            return hideOffCanvasNav()
        }

        return (
            <div
                key={i}
                className=""
                onClick={handleNavClick}
                style={{
                    color: i == 0 ? '#E37A16' : '#FFF'
                }}
            >
                <p className="m-0 p-0 font-family-DmSans txt-15 clickable sinlge-nav-link">
                    { title }
                </p>
            </div>
        )
    })    

    return(
        <div className="d-flex align-items-center justify-content-between nav-bg px-4 py-2">
            <div className="col-lg-2 col-md-3 col-3">
                <img src={logo1} className="col-lg-10 col-md-12 col-12" />                    
            </div>
            <div style={{ gap: '20px' }} className="d-lg-flex d-md-none d-none align-items-center justify-content-between col-lg-6">
                { displayNavLinks }
            </div>
            <div className="col-lg-2 d-lg-flex d-md-none d-none align-items-center justify-content-end">
                <button
                    onClick={goToCondoTracking}
                    style={{
                        borderRadius: '40px'
                    }}
                    className="bg-E37A16 nav-btn px-3 py-2 font-family-DmSans txt-15 txt-FFF fw-600"
                >
                    Condo Tracking
                </button>
            </div>  
            <div className="d-flex d-md-flex d-lg-none align-items-center justify-content-end">
                <BsMenuButton size={25} color="#FFF" className="clickable" onClick={openOffCanvasNav} />
            </div>                                      

            <Offcanvas show={showOffcanvasNav}>
                <div className="p-4">
                    <div className="d-flex align-items-center justify-content-between mb-5">
                        <div className="col-3">
                            <img src={logo1} className="col-lg-12 col-md-12 col-12" />
                        </div>
                        <div className="d-flex align-items-center justify-content-end">
                            <GiCancel color="#000" size={25} className="clickable" onClick={hideOffCanvasNav} />
                        </div>
                    </div>

                    <div className="d-flex flex-column align-items-center justify-content-center">
                        {
                            navLinks.map((navLink, i) => {

                                const { title } = navLink

                                return(
                                    <div
                                        key={i}
                                        className=""
                                    >
                                        <p className="m-0 p-0 font-family-DmSans txt-15 txt-000 clickable mb-4">
                                            { title }
                                        </p>
                                    </div>                                    
                                )
                            })
                        }

                        <button
                            onClick={goToCondoTracking}
                            style={{
                                borderRadius: '40px'
                            }}
                            className="bg-E37A16 nav-btn px-3 py-2 font-family-DmSans txt-15 txt-FFF fw-600"
                        >
                            Condo Tracking
                        </button>                        
                    </div>
                </div>
            </Offcanvas>
        </div>        
    )
}