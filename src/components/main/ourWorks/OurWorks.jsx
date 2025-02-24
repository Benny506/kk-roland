import React from "react";

//work images
import workImg1 from '../../../assets/images/works-img-1.png'
import workImg2 from '../../../assets/images/works-img-2.png'
import workImg3 from '../../../assets/images/works-img-3.png'
import workImg4 from '../../../assets/images/works-img-4.png'
import workImg5 from '../../../assets/images/works-img-5.png'
import workImg6 from '../../../assets/images/works-img-6.png'
import workImg7 from '../../../assets/images/works-img-7.png'
import workImg8 from '../../../assets/images/works-img-8.png'
import workImg9 from '../../../assets/images/works-img-9.png'
import workImg10 from '../../../assets/images/works-img-10.png'
import workImg11 from '../../../assets/images/works-img-11.png'
import workImg12 from '../../../assets/images/works-img-12.png'

//team images
import teamImg1 from '../../../assets/images/team-img-1.png'
import teamImg2 from '../../../assets/images/team-img-2.png'
import teamImg3 from '../../../assets/images/team-img-3.png'

import './css/ourWorks.css'


const ourWorks = [
    {
        id: 1,
        img: 'work-img-1-bg',
        title: 'Site',
        text: 'extentions'
    },
    {
        id: 2,
        img: 'work-img-2-bg',
        title: 'FHC Site',
        text: 'FHC site inspection'
    },
    {
        id: 3,
        img: 'work-img-3-bg',
        title: 'FHC Site',
        text: 'Issuing Site Instruction '
    },
    {
        id: 4,
        img: 'work-img-4-bg',
        title: 'Site',
        text: 'extentions '
    },
    {
        id: 5,
        img: 'work-img-5-bg',
        title: 'Site',
        text: 'extentions '
    },
    {
        id: 6,
        img: 'work-img-6-bg',
        title: 'Site',
        text: 'extentions '
    },
    {
        id: 7,
        img: 'work-img-7-bg',
        title: 'Site',
        text: 'extentions '
    },
    {
        id: 8,
        img: 'work-img-8-bg',
        title: 'Site',
        text: 'extentions '
    },
    {
        id: 9,
        img: 'work-img-9-bg',
        title: 'Site',
        text: 'extentions '
    },
    {
        id: 10,
        img: 'work-img-10-bg',
        title: 'Site',
        text: 'extentions '
    },
    {
        id: 11,
        img: 'work-img-11-bg',
        title: 'Site',
        text: 'extentions '
    },             
    {
        id: 12,
        img: 'work-img-12-bg',
        title: 'Site',
        text: 'extentions '
    },
]

const ourTeam = [
    {
        id: 1,
        img: 'team-img-1',
        name: 'Kanu Izuakolam (MNSE, R. Engr, PMP)',
        position: 'Director & Lead Consultant.'
    },
    {
        id: 2,
        img: 'team-img-2',
        name: 'Kanu Izuakolam (MNSE, R. Engr, PMP)',
        position: 'Director & Lead Consultant.'
    },
    {
        id: 3,
        img: 'team-img-3',
        name: 'Kanu Izuakolam (MNSE, R. Engr, PMP)',
        position: 'Director & Lead Consultant.'
    },
    {
        id: 4,
        img: 'team-img-4',
        name: 'Kanu Izuakolam (MNSE, R. Engr, PMP)',
        position: 'Director & Lead Consultant.'
    },
    {
        id: 5,
        img: 'team-img-5',
        name: 'Kanu Izuakolam (MNSE, R. Engr, PMP)',
        position: 'Director & Lead Consultant.'
    },
]


export default function OurWorks(){

    const displayOurWorks = ourWorks.map((workImg, i) => {
        const { img, title, text } = workImg

        return (
            <div    
                key={i}
                className={`col-lg-4 px-3 mb-4`}
            >
                <div 
                    className={`${img} bg-img d-flex align-items-end justify-content-start`}
                    style={{
                        height: '414px'
                    }}
                >
                    <div
                        style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.45)',
                            borderTopRightRadius: '8px',
                            width: '95%'
                        }}
                        className="py-2 px-3"
                    >
                        <h1 className="m-0 p-0 txt-FFF font-family-DmSans fw-600 txt-17 mb-2">
                            { title }
                        </h1>
                        <p className="m-0 p-0 txt-FFF font-familiy-DmSans txt-15">
                            { text }
                        </p>
                    </div>
                </div>
            </div>            
        )
    })

    const displayOurTeam = ourTeam.map((workImg, i) => {
        const { img, name, position } = workImg

        return(
            <div    
                key={i}
                className="col-lg-3 px-1 mb-4"
            >
                <div
                    style={{
                        height: '396px',
                        borderRadius: '10px'
                    }} 
                    className={`${img} bg-img d-flex align-items-end justify-content-start`}
                >
                    <div
                        style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.45)',
                            borderTopRightRadius: '8px',
                            borderBottomRightRadius: '8px',
                            width: '75%'
                        }}
                        className="py-2 px-3 mb-4"
                    >
                        <h1 className="m-0 p-0 txt-FFF font-family-DmSans fw-600 txt-17 mb-2">
                            { name }
                        </h1>
                        <p className="m-0 p-0 txt-FFF font-familiy-DmSans txt-15">
                            { position }
                        </p>                        
                    </div>
                </div>
            </div>            
        )
    })    

    return(
        <div>
            <div className="mb-5 d-lg-flex d-md-block d-block align-items-center justify-content-between">
                <div className="col-lg-4 mb-lg-0 mb-md-4 mb-4 d-flex align-items-center justify-content-start">
                    <h1 
                        style={{
                            borderLeft: '1px solid #E37A16',
                            borderRight: '1px solid #E37A16',
                        }}
                        className="m-0 p-0 txt-E37A16 font-family-DmSans fw-500 txt-16 px-2"
                    >
                        Recent Works
                    </h1>
                </div>

                <div className="col-lg-6">
                    <p className="m-0 p-0 txt-737373 fw-500 font-family-DmSans txt-14">
                        At the core of every project lies a commitment to durability. 
                        Through meticulous planning, robust materials, and innovative techniques, 
                        we construct structures that stand the test of time.
                    </p>
                </div>
            </div>

            <div className="d-flex align-items-center justify-content-between flex-wrap mb-5">
                { displayOurWorks }
            </div>

            <div style={{ gap: '0px' }} className="d-flex align-items-center justify-content-start flex-wrap mb-5">
                <div className="col-lg-3 mb-lg-0 mb-md-3 mb-3">
                    <div className="d-flex align-items-center justify-content-start mb-5">
                        <h1 
                            style={{
                                borderLeft: '1px solid #E37A16',
                                borderRight: '1px solid #E37A16',
                            }}
                            className="m-0 p-0 txt-E37A16 font-family-DmSans fw-500 txt-16 px-2"
                        >
                            Meet Our Team 
                        </h1>
                    </div>
                    <div>
                        <p className="m-0 p-0 txt-737373 font-family-DmSans txt-14 fw-500">
                            Meet the experts combining innovation, knowledge, 
                            and precision to design infrastructure built for strength, efficiency, and lasting impact.
                        </p>
                    </div>
                </div>
                
                { displayOurTeam }
                
                <div 
                    style={{
                        height: '396px',
                        borderRadius: '10px'
                    }}
                    className="px-1 d-flex col-lg-3 mb-4 py-3 px-3 flex-column justify-content-between bg-E37A16"
                >
                    <div>
                        <h1 className="m-0 p-0 txt-21 txt-FFF font-family-DmSans fw-600 mb-2">
                            Join the Team
                        </h1>
                        <p className="m-0 p-0 txt-FFF font-family-DmSans txt-15 fw-500">
                            Join a team where innovation meets excellence. Collaborate, grow, and shape the future with impactful engineering solutions.
                        </p>
                    </div>
                    <button
                        style={{
                            borderRadius: '15px',
                            backgroundColor: '#FFF'
                        }}
                        className="fw-500 txt-16 p-3 font-family-DmSans txt-E37A16"
                    >
                        Join now
                    </button>
                </div>
            </div>
        </div>
    )
}