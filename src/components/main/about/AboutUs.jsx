import React, { useState } from "react";
import { CircleSvg } from "../../svgs/CustomSvg";
import visionImg from '../../../assets/images/visionImg.png'
import missionImg from '../../../assets/images/missionImg.png'
import historyImg from '../../../assets/images/historyImg.png'
import ourApproachImg from '../../../assets/images/historyImg.png'


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

const aboutStatements = [
    {
        img: visionImg,
        title: 'Vision',
        subTitle: 'Building Vision, Delivering Value',
        text: 'Our vision is to be the leading firm in designing and delivering first-class, high-quality projects that balance innovation, superior craftsmanship, and cost-efficiency, ensuring exceptional value and sustainable solutions.'
    },
    {
        img: missionImg,
        title: 'Mission',
        subTitle: 'Engineering Progress, Empowering Innovation.',
        text: 'To deliver innovative and sustainable engineering solutions that drive progress and exceed client expectations.'
    },
    {
        img: historyImg,
        title: 'History',
        subTitle: 'Built on Innovation, Driven by Excellence.',
        text: 'Founded with a passion for innovation, our engineering company has grown from a small team of experts into a trusted leader, delivering cutting-edge solutions across diverse industries.'
    },
    {
        img: ourApproachImg,
        title: 'Our Approach',
        subTitle: 'Strategic Thinking, Practical Solutions.',
        text: 'We combine technical expertise, collaborative problem-solving, and a client-focused mindset to deliver tailored engineering solutions that meet evolving industry needs.'
    },
]


export default function AboutUs(){

    const [activeAbtStatement, setActiveAbtStatement] = useState(aboutStatements[0])
    const [statements, setStatements] = useState(aboutStatements)

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

    const displayAboutStatements = statements.map((aboutStatement, i) => {
        const { title } = aboutStatement

        const isActive = activeAbtStatement.title == title

        const handleStatementClick = () => {
            const _statements = aboutStatements.filter(statement => statement.title != title)
            _statements.unshift(aboutStatement)

            setActiveAbtStatement(aboutStatement)
            setStatements(_statements)

            return;
        }

        return(
            <div
                key={i}
                className="mb-4"
            >
                {
                    isActive
                    ?
                        <h1
                            onClick={handleStatementClick}
                            style={{
                                textDecorationLine: 'underline',
                            }}
                            className="clickable txt-E37A16 txt-43 fw-600 m-0 p-0 font-family-DmSans"
                        >
                            { title }
                        </h1>       
                    :
                        <p onClick={handleStatementClick} className="clickable m-0 p-0 txt-737373 font-family-DmSans txt-20 fw-500">
                            { title }
                        </p>                                
                }
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
                            Our Tenet
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
                    <img 
                        className="col-lg-12 col-md-12 col-12" 
                        src={
                            activeAbtStatement.title.toLowerCase() == 'vision'
                            ?
                            visionImg
                            :
                            activeAbtStatement.title.toLowerCase() == 'mission'
                            ?
                            missionImg
                            :
                            historyImg
                        } 
                    />
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
                        { displayAboutStatements }
                    </div>

                    <div>
                        <h3 className="m-0 p-0 mb-4 txt-000 font-family-DmSans fw-500 txt-17">
                            { activeAbtStatement.subTitle }
                        </h3>
                        <p className="m-0 p-0 font-family-DmSans txt-737373 txt-15 fw-500">
                            { activeAbtStatement.text }
                        </p>
                    </div>
                </div>
            </div>            
        </div>        
    )
}