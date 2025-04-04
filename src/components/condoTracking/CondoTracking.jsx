import React, { useState } from 'react'
import './css/condoTracking.css'
import logo1 from '../../assets/images/logo_1.png'
import { useNavigate } from 'react-router-dom'
import { BsMenuButton } from 'react-icons/bs'
import { Offcanvas } from 'react-bootstrap'
import { GiCancel } from 'react-icons/gi'
import { MissionSvg, ServicesSvg, VisionSvg } from '../svgs/CustomSvg'
import Footer from '../footer/Footer'
import { Formik } from 'formik'


const statements = [
    {
        Icon: () => <MissionSvg />,
        title: 'Our Mission',
        text: 'To provide transparent, timely, and comprehensive condominium construction progress update to investors so as to foster trust, confidence and Peace of mind.'
    },
    {
        Icon: () => <VisionSvg />,
        title: 'Our Vision',
        text: 'To be the leading platform for construction progress monitoring in Nigeria, empowering investors with real-time updates and setting the benchmark for accountability, transparency, and excellence in the real estate industry.'
    },
    {
        Icon: () => <ServicesSvg />,
        title: 'Services',
        text: 'We provide real-time tracking of delivery status for condominium buyers with complete transparency and confidence'
    }
]


export default function CondoTracking(){

    const navigate = useNavigate()
    const navigateTo = (path) => navigate(path)
    const goHome = () => navigateTo('/')

    const [showOffcanvasNav, setShowOffcanvasNav] = useState(false)

    const openOffCanvasNav = () => setShowOffcanvasNav(true)
    const hideOffCanvasNav = () => setShowOffcanvasNav(false)
    
    const displayStatements = statements.map((statement, i) => {
        const { Icon, title, text } = statement

        return(
            <div
                key={i}
                className='col-lg-4 col-md-12 col-12 mb-lg-0 mb-md-4 mb-4 px-3 d-flex align-items-center justify-content-center'
            >
                <div
                    style={{
                        borderRadius: "15px",
                        backgroundColor: "#222",
                        minHeight: '400px'
                    }}     
                    className='d-flex flex-column p-3 align-items-stretch justify-content-between h-100'           
                >         
                    <div>
                        <div className='d-flex align-items-center justify-content-start'>
                            <div
                                style={{
                                    borderRadius: '100%'
                                }}
                                className='bg-141414 p-2 mb-3'
                            >
                                <Icon />
                            </div>
                        </div>         
                        
                        <h1 className='m-0 p-0 txt-FFF fw-600 txt-23 font-family-DmSans'>
                            { title }
                        </h1>
                    </div>

                    <div>
                        <p className='m-0 p-0 font-family-DmSans fw-400 txt-16 txt-FFF'>
                            { text }
                        </p>
                    </div>
                </div>
            </div>
        )
    })

    return(
        <div className='bg-141414'>
            <div className='condo-tracking-bg py-3 px-lg-5 px-md-3 px-3'>
                <div 
                    style={{
                        borderRadius: '40px',
                        marginBottom: '70px',
                        background: 'linear-gradient(to right, rgba(253, 253, 253, 0.3), rgba(253, 253, 253, 0.2))'
                    }}
                    className="mx-lg-3 mx-md-0 mx-0"
                >
                    <div className="d-flex align-items-center justify-content-between nav-bg px-4 py-2">
                        <div className="col-lg-2 col-md-3 col-3">
                            <img src={logo1} className="col-lg-10 col-md-12 col-12" />                    
                        </div>
                        <div className="col-lg-2 d-lg-flex d-md-none d-none align-items-center justify-content-end">
                            <button
                                onClick={goHome}
                                style={{
                                    borderRadius: '40px'
                                }}
                                className="bg-E37A16 nav-btn px-3 py-2 font-family-DmSans txt-15 txt-FFF fw-600"
                            >
                                Home
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
                                    <button
                                        onClick={goHome}
                                        style={{
                                            borderRadius: '40px'
                                        }}
                                        className="bg-E37A16 nav-btn px-3 py-2 font-family-DmSans txt-15 txt-FFF fw-600"
                                    >
                                        Home
                                    </button>                        
                                </div>
                            </div>
                        </Offcanvas>
                    </div> 
                </div>    

                <div className='m-lg-5 p-lg-5 m-md-0 m-0 p-md-3 p-3'>
                    <h1 className='m-0 p-0 mb-4 font-family-DmSans txt-FFF text-center fw-600 txt-50'>
                        Welcome to Condo Tracking your live guide to condo delivery.
                    </h1>
                    <p className='m-0 p-0 mx-lg-5 mx-md-3 mx-3 pb-5 mb-5 font-family-DmSans txt-FFF text-center fw-600 txt-19'>
                        Your reliable partner for real-time updates on your condominium delivery journey. Experience seamless tracking as you watch your future home come to life, 
                        with every update designed to keep you informed and at ease throughout the process.
                    </p>
                    <div className="d-flex align-items-center justify-content-center">
                        <button
                            style={{
                                borderRadius: '40px'
                            }}
                            className="bg-E37A16 nav-btn px-5 py-3 font-family-DmSans txt-15 txt-FFF fw-600"
                        >
                            Start Tracking
                        </button>
                    </div>                    
                </div>        
            </div> 

            <div className='my-lg-5 my-md-3 my-3 py-lg-5 py-md-4 py-4' />

            <div className='px-lg-5 px-md-3 px-3'>
                <div className='d-flex flex-column align-items-center justify-content-center mb-3'>
                    <div className='d-flex flex-column align-items-center justify-content-center col-lg-7 col-md-12 col-12'>
                        <h1 className='m-0 p-0 mb-3 txt-FFF text-center txt-43 fw-500 font-family-DmSans'>
                            Your Journey, Our Commitment.
                        </h1>
                        <p className='m-0 p-0 w-75 px-4 txt-FFF text-center fw-400 txt-16 font-family-DmSans'>
                            At Condo Tracking, we simplify your condo journey with real-time 
                            updates and transparent insights, so you can track your home delivery with confidence.
                        </p>
                    </div>
                </div>

                <div className='d-flex flex-wrap align-items-stretch justify-content-between'>
                    { displayStatements }
                </div>
            </div>   

            <div className='my-lg-5 my-md-3 my-3 py-lg-5 py-md-4 py-4' />

            <div className='px-lg-5 px-md-3 px-3'>
                <div className='d-flex flex-wrap align-items-stretch justify-content-between mb-3'>
                    <div className='col-lg-7 col-md-12 col-12 mb-lg-0 mb-md-3 mb-3 condo-tracking-gallery-bg-1' />

                    <div className='col-lg-5 col-md-12 col-12 px-lg-3 px-md-0 px-0'>
                        <div className='w-100 condo-tracking-gallery-bg-2' />
                    </div>                    
                </div>

                <div className='d-flex flex-wrap align-items-stretch justify-content-between'>
                    <div className='col-lg-5 col-md-12 col-12 mb-lg-0 mb-md-3 mb-3 condo-tracking-gallery-bg-3' />

                    <div className='col-lg-7 col-md-12 col-12 px-lg-3 px-md-0 px-0'>
                        <div className='w-100 condo-tracking-gallery-bg-4' />
                    </div>                    
                </div>                
            </div>

            <div className='my-lg-5 my-md-3 my-3 py-lg-5 py-md-4 py-4' />

            <div className='px-lg-5 px-md-3 px-3'>
                <div className='d-flex flex-column align-items-center justify-content-center'>
                    <div className='d-flex flex-column align-items-center justify-content-center col-lg-10 mb-5'>
                        <div
                            style={{
                                borderRadius: '30px',
                                border: '1px solid #FFF'
                            }}
                            className='px-4 py-2 mb-3'
                        >
                            <p className='m-0 p-0 txt-FFF font-family-DmSans txt-16 fw-500'>
                                Subscribe to CondoTracking
                            </p>
                        </div>
                        <h1 className='m-0 p-0 mb-3 txt-FFF text-center txt-43 fw-500 font-family-DmSans'>
                            Subscribe for real-time updates.
                        </h1>
                        <p className='m-0 p-0 txt-FFF text-center fw-400 txt-16 font-family-DmSans'>
                            Receive instant notifications and personalized alerts on every milestone in your condo delivery journey.
                        </p>
                    </div>

                    <div 
                        style={{
                            borderRadius: '12px',
                            backgroundColor: '#222'
                        }}
                        className='d-flex flex-column p-3 align-items-center justify-content-center col-lg-10'
                    >
                        <h1 className='m-0 p-0 mb-5 pb-2 txt-FFF font-family-DmSans text-center fw-600 txt-32'>
                            Start your Journey with CondoTracking Today!
                        </h1>

                        <Formik>
                            {({ values, handleBlur, handleSubmit, isValid, dirty }) => (
                                <div className='w-100'>
                                    <div className='w-100 mb-4 d-flex flex-wrap align-items-start justify-content-between'>
                                        <div className='col-lg-6 col-md-12 col-12 mb-lg-0 mb-md-4 mb-4 px-1 d-flex align-items-center justify-content-start'>
                                            <div className='w-100'>
                                                <p className='m-0 p-0 mb-2 txt-FFF font-family-DmSans txt-19 fw-500'>
                                                    First Name<sup style={{ color: 'rgba(195, 1, 1, 1)' }}>*</sup>
                                                </p>
                                                <input 
                                                    placeholder='First Name'
                                                    className='txt-FFF fw-400 font-family-DmSans txt-16 p-3 condo-tracking-subcribe-input-field'
                                                />
                                            </div>
                                        </div>

                                        <div className='col-lg-6 col-md-12 col-12 px-1 d-flex align-items-center justify-content-end'>
                                            <div className='w-100'>
                                                <p className='m-0 p-0 mb-2 txt-FFF font-family-DmSans txt-19 fw-500'>
                                                    Last Name<sup style={{ color: 'rgba(195, 1, 1, 1)' }}>*</sup>
                                                </p>
                                                <input 
                                                    placeholder='Last Name'
                                                    className='txt-FFF fw-400 font-family-DmSans txt-16 p-3 condo-tracking-subcribe-input-field'
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='w-100 mb-4 d-flex flex-wrap align-items-start justify-content-between'>
                                        <div className='col-lg-6 col-md-12 col-12 px-1 mb-lg-0 mb-md-4 mb-4 d-flex align-items-center justify-content-start'>
                                            <div className='w-100'>
                                                <p className='m-0 p-0 mb-2 txt-FFF font-family-DmSans txt-19 fw-500'>
                                                    Email Address<sup style={{ color: 'rgba(195, 1, 1, 1)' }}>*</sup>
                                                </p>
                                                <input 
                                                    placeholder='Email Address'
                                                    className='txt-FFF fw-400 font-family-DmSans txt-16 p-3 condo-tracking-subcribe-input-field'
                                                />
                                            </div>
                                        </div>

                                        <div className='col-lg-6 col-md-12 col-12 px-1 d-flex align-items-center justify-content-end'>
                                            <div className='w-100'>
                                                <p className='m-0 p-0 mb-2 txt-FFF font-family-DmSans txt-19 fw-500'>
                                                    Phone Number {'('}Optional{')'}
                                                </p>
                                                <input 
                                                    placeholder='Phone Number'
                                                    className='txt-FFF fw-400 font-family-DmSans txt-16 p-3 condo-tracking-subcribe-input-field'
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='w-100 mb-4 d-flex flex-wrap align-items-start justify-content-between'>
                                        <div className='col-lg-6 col-md-12 col-12 px-1 mb-lg-0 mb-md-4 mb-4 d-flex align-items-center justify-content-start'>
                                            <div className='w-100'>
                                                <p className='m-0 p-0 mb-2 txt-FFF font-family-DmSans txt-19 fw-500'>
                                                    Select Package<sup style={{ color: 'rgba(195, 1, 1, 1)' }}>*</sup>
                                                </p>
                                                <select
                                                    className='txt-FFF fw-400 font-family-DmSans txt-16 p-3 condo-tracking-subcribe-input-field'
                                                >
                                                    <option className='txt-737373 fw-400 font-family-DmSans txt-16'>Select a package</option>
                                                    <option className='txt-FFF fw-400 font-family-DmSans txt-16'>Package 1</option>
                                                    <option className='txt-FFF fw-400 font-family-DmSans txt-16'>Package 2</option>
                                                    <option className='txt-FFF fw-400 font-family-DmSans txt-16'>Package 3</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className='col-lg-6 col-md-12 col-12 px-1 d-flex align-items-center justify-content-end'>
                                            <div className='w-100'>
                                                <p className='m-0 p-0 mb-2 txt-FFF font-family-DmSans txt-19 fw-500'>
                                                    Subscription price
                                                </p>
                                                <input 
                                                    placeholder='NGN 0.00'
                                                    className='txt-FFF fw-400 font-family-DmSans txt-16 p-3 condo-tracking-subcribe-input-field'
                                                />
                                            </div>
                                        </div>
                                    </div> 

                                    <div className='py-4 my-4' />

                                    <div className='d-flex align-items-center justify-content-center'>
                                        <button
                                            style={{
                                                borderRadius: '40px'
                                            }}
                                            className='col-lg-8 bg-141414 txt-737373 font-family-DmSans txt-23 fw-600 text-center px-5 py-2'
                                        >
                                            Subscribe
                                        </button>                                                       
                                    </div>                
                                </div>
                            )}
                        </Formik>
                    </div>
                </div>
            </div> 

            <div className='my-lg-5 my-md-3 my-3 py-lg-5 py-md-4 py-4' />

            <Footer />            
        </div>
    )
}