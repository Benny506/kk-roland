import React from "react";
import logo1 from '../../assets/images/logo_1.png'
import { FaceBookSvg, InstagramSvg, LinkedInSvg, TwitterSvg } from "../svgs/CustomSvg";


export default function Footer(){
    return(
        <div className="bg-000 p-lg-5 p-md-3 p-3">
            <div className="d-flex flex-wrap mb-5 pb-4 align-items-center justify-content-between">
                <div className="col-lg-5 col-md-12 col-12 mb-lg-0 mb-md-4 mb-4">
                    <div className="col-lg-5 col-md-5 col-5 mb-4">
                        <img src={logo1} className="col-lg-12 col-md-12 col-12" />
                    </div>
                    <p className="m-0 p-0 txt-737373 txt-13 fw-500 font-familyDmSans">
                        We specialize in delivering innovative, dependable, and sustainable engineering solutions, 
                        shaping resilient infrastructure and advancing industry standards.
                    </p>
                </div>

                <div className="col-lg-5 col-md-12 col-12">
                    <div className="d-flex align-items-center justify-content-between mb-3">
                        <input 
                            style={{
                                borderRadius: '30px',
                                border: '1px solid #737373',
                                width: '45%'
                            }}
                            className="px-3 py-2 bg-tranparent fw-500 txt-14 txt-FFF font-familyDmSans"
                            placeholder="Fullname"
                        />
                        <input 
                            style={{
                                borderRadius: '30px',
                                border: '1px solid #737373',
                                width: '45%'
                            }}
                            className="px-3 py-2 bg-tranparent fw-500 txt-14 txt-FFF font-familyDmSans"
                            placeholder="Email address"
                        />                        
                    </div>
                    <input 
                        style={{
                            borderRadius: '30px',
                            border: '1px solid #737373',
                            width: '100%'
                        }}
                        className="px-3 py-2 bg-tranparent fw-500 txt-14 txt-FFF font-familyDmSans mb-4"
                        placeholder="Write message"
                    />                     
                    <button
                        style={{
                            borderRadius: '30px'
                        }}
                        className="bg-E37A16 px-4 py-2 text-center txt-FFF font-family-DmSans fw-600 txt-15 w-100"
                    >
                        Send message
                    </button>
                </div>
            </div>

            <div className="d-flex flex-wrap mb-5 pb-4 align-items-center justify-content-between">
                <div className="col-lg-4 col-md-12 col-12 mb-lg-0 mb-md-4 mb-4">
                    <p className="m-0 p-0 txt-737373 txt-15 fw-500 font-family-DmSans">
                        ADDRESS
                        <br />
                        79 Simpson STR. Adekunle Yaba, Lagos state
                        <br />
                        2 Aqua Edem STR Ekorinim, Calabar, Cross River state
                    </p>
                </div>

                <div className="col-lg-3 col-md-12 col-12 mb-lg-0 mb-md-4 mb-4">
                    <p className="m-0 p-0 txt-737373 txt-15 fw-500 font-family-DmSans">
                        CONTACT
                        <br />
                        +234 905 814 4378
                        <br />
                        +234 706 247 5379
                    </p>
                </div>

                <div className="col-lg-3 col-md-12 col-12">
                    <p className="m-0 p-0 txt-737373 txt-15 fw-500 font-family-DmSans">
                        EMAIL
                        <br />
                        mail@kkrolands.com
                    </p>
                </div>                                
            </div>

            <div
                style={{
                    borderRadius: '25px',
                    borderTop: '1px solid #737373'
                }}
                className="d-flex flex-wrap align-items-center justify-content-between w-100 p-3 px-4"
            >
                <p className="m-0 p-0 mb-lg-0 mb-md-4 mb-4 txt-737373 txt-13 fw-500 font-family-DmSans">
                    Developed and Designed by InnTech Resources 2023. All Rights Reserved
                </p>

                <div style={{ gap: '10px' }} className="col-lg-5 d-flex align-items-center justify-content-end">
                    <TwitterSvg />
                    <FaceBookSvg />
                    <InstagramSvg />
                    <LinkedInSvg />
                </div>
            </div>
        </div>
    )
}