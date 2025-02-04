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


const ourWorks = [workImg1, workImg2, workImg3, workImg4, workImg5, workImg6, workImg7, workImg8, workImg9, workImg10, workImg11, workImg12]

const ourTeam = [teamImg1, teamImg2, teamImg3]


export default function OurWorks(){

    const displayOurWorks = ourWorks.map((workImg, i) => (
        <div    
            key={i}
            className="col-lg-4 px-3 mb-4"
        >
            <img src={workImg} className="col-lg-12 col-md-12 col-12" />
        </div>
    ))

    const displayOurTeam = ourTeam.map((workImg, i) => (
        <div    
            key={i}
            className="col-lg-3 px-3 mb-4"
        >
            <img src={workImg} className="col-lg-12 col-md-12 col-12" />
        </div>
    ))    

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

            <div className="d-flex align-items-center justify-content-between flex-wrap mb-5">
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
            </div>
        </div>
    )
}