import React from "react";
import { CircleSvg } from "../../svgs/CustomSvg";
import visionImg from '../../../assets/images/visionImg.png'


const aboutOptions = [
    {
        title: 'Knowledge',
        text: "We embrace ongoing learning and innovation, ensuring every project reflects the latest engineering advancements and best practices."
    },
    {
        title: 'Kinematics',
        text: "Kinematics drives our precision and innovation, ensuring every structure is designed for optimal performance and stability."
    },
    {
        title: 'Risilient',
        text: "We design resilient structures built for strength, durability, and lasting performance—engineered to meet today’s needs & future demands."
    },
    {
        title: 'Opportunity',
        text: "We seize opportunities, using expertise and innovation to deliver exceptional engineering solutions that drive progress."
    },
    {
        title: 'Leadership',
        text: "We lead the industry with innovative solutions and a commitment to excellence in every project we work on with respect to time."
    },
    {
        title: 'Agreeable',
        text: "We design structures that harmonize with nature, blending sustainability, innovation, and environmental stewardship."
    },
    {
        title: 'Needs',
        text: "Our engineering solutions are tailored to meet the unique needs of each project, ensuring functionality and efficiency"
    },
    {
        title: 'Dependable',
        text: "We provide reliable engineering solutions that ensure safety, performance, and consistent quality in every project."
    },
]


export default function AboutUs(){

    const displayAboutUsOptions = aboutOptions.map((aboutOpt, i) => {
        const { title, text } = aboutOpt

        return(
            <div
                key={i}
                className="col-lg-3 mb-4"
                style={{
                    padding: '10px'
                }}
            >
                <div style={{ gap: '15px' }} className="mb-4 d-flex align-items-center">
                    <div>
                        <CircleSvg />
                    </div>
                    <p className="m-0 p-0 txt-E37A16 fw-900">
                        ------------------------------
                    </p>
                </div>

                <div className="mb-4">
                    <h4 className="m-0 p-0 txt-E37A16 txt-23 fw-600 font-family-DmSans">
                        { title }
                    </h4>
                </div>

                <div>
                    <p className="m-0 p-0 txt-737373 fw-400 txt-16 font-family-DmSans">
                        { text }
                    </p>
                </div>
            </div>
        )
    })

    return(
        <div>
            <div className="mb-5 d-flex align-items-start justify-content-between">
                <div className="col-lg-4 d-flex align-items-center justify-content-start">
                    <h1 
                        style={{
                            borderLeft: '1px solid #E37A16',
                            borderRight: '1px solid #E37A16',
                        }}
                        className="m-0 p-0 txt-E37A16 font-family-DmSans fw-500 txt-16 px-2"
                    >
                        About us
                    </h1>
                </div>
                
                <div className="col-lg-4 col-md-6 col-6">
                    <div
                        style={{
                            borderRadius: '8px',
                            borderBottom: '0.5px solid #000'
                        }}
                        className="d-flex clickable mb-4 py-2 align-items-center justify-content-between px-2"
                    >  
                        <p className="m-0 p-0 txt-000 font-family-DmSans fw-500 txt-16">
                            Why choose us
                        </p>
                        <p className="m-0 p-0 txt-000 font-family-DmSans fw-500 txt-16">
                            01
                        </p>
                    </div>
                    <div
                        style={{
                            borderRadius: '8px',
                            borderBottom: '0.5px solid #000'
                        }}
                        className="d-flex clickable py-2 align-items-center justify-content-between px-2"
                    >  
                        <p className="m-0 p-0 txt-000 font-family-DmSans fw-500 txt-16">
                            Why choose us
                        </p>
                        <p className="m-0 p-0 txt-000 font-family-DmSans fw-500 txt-16">
                            02
                        </p>                        
                    </div>                    
                </div>
            </div>

            <div className="mb-5">
                <h1 
                    style={{
                        textTransform: 'uppercase'
                    }}
                    className="m-0 p-0 font-family-DmSans fw-600 txt-737373 txt-50 mb-5"
                >
                    <span className="txt-E37A16">Engineering</span> Innovation, <br /> Delivering <span className="txt-E37A16">Resilience</span>
                </h1>

                <div className="d-flex flex-wrap align-items-center justify-content-between">
                    { displayAboutUsOptions }
                </div>
            </div>

            <div className="d-flex flex-wrap align-items-stretch justify-content-between">
                <div className="col-lg-6 col-md-12 col-12 mb-lg-0 mb-md-4 mb-4">
                    <img className="col-lg-12 col-md-12 col-12" src={visionImg} />
                </div>

                <div className="col-lg-6 col-md-12 col-12 px-3">
                    <div className="mb-5 pb-5">
                        <div className="d-flex align-items-center justify-content-start">
                            <h1 
                                style={{
                                    borderLeft: '1px solid #E37A16',
                                    borderRight: '1px solid #E37A16',
                                }}
                                className="m-0 p-0 txt-E37A16 font-family-DmSans fw-500 txt-16 px-2 mb-5"
                            >
                                Our Tenets
                            </h1>
                        </div>
                        <h1
                            style={{
                                textDecorationLine: 'underline',
                            }}
                            className="txt-E37A16 txt-43 fw-600 m-0 p-0 font-family-DmSans mb-3"
                        >
                            Vision
                        </h1>
                        <p className="m-0 p-0 txt-737373 font-family-DmSans txt-20 fw-500">
                            Mission
                        </p>
                        <p className="m-0 p-0 txt-737373 font-family-DmSans txt-20 fw-500">
                            History
                        </p>
                        <p className="m-0 p-0 txt-737373 font-family-DmSans txt-20 fw-500">
                            Our Approach
                        </p>                        
                    </div>

                    <div>
                        <h3 className="m-0 p-0 mb-4 txt-000 font-family-DmSans fw-500 txt-17">
                            Building Vision, Delivering Value
                        </h3>
                        <p className="m-0 p-0 font-family-DmSans txt-737373 txt-15 fw-500">
                            Our vision is to be the leading firm in designing and delivering first-class, high-quality projects that balance innovation, superior craftsmanship, and cost-efficiency, ensuring exceptional value and sustainable solutions.
                        </p>
                    </div>
                </div>
            </div>            
        </div>        
    )
}