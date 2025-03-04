import React, { useEffect, useState } from "react";
import './css/ourWorks.css'
import ViewThreeWorksModal from "./auxiliary/ViewThreeWorksModal";
import DisplaySingleWork from "./auxiliary/DisplaySingleWork";
import { ourWorks } from "./auxiliary/ourWorksAux";

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

    const [viewThreeWorksModal, setViewThreeWorksModal] = useState({ visible: false, hide: null })
    const [threeWorks, setThreeWorks] = useState()

    const openViewThreeWorksModal = () => setViewThreeWorksModal({ visible: true, hide: hideViewThreeWorksModal })
    const hideViewThreeWorksModal = () => setViewThreeWorksModal({ visible: false, hide: null })

    const singleImgClick = ({ prev, current, next }) => {
        if(!prev || !current || !next) return;

        setThreeWorks([prev, current, next])
        openViewThreeWorksModal()
        return;
    }

    const displayOurWorks = ourWorks.map((singleWork, i) => {
        // const { img, title, text } = singleWork

        return (
            <div    
                key={i}
                className={`col-lg-4 col-12 col-md-12 px-3 mb-4`}
            >
                <DisplaySingleWork 
                    singleWork={singleWork}
                    singleImgClick={singleImgClick}
                />
            </div>            
        )
    })

    const displayOurTeam = ourTeam.map((teamMember, i) => {
        const { img, name, position } = teamMember

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

            <ViewThreeWorksModal 
                modalProps={viewThreeWorksModal}
                threeWorks={threeWorks}
            />
        </div>
    )
}