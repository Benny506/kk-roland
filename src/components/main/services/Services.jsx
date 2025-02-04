import React from "react";
import img1 from '../../../assets/images/service-img-1.png'
import img2 from '../../../assets/images/service-img-2.png'
import img3 from '../../../assets/images/service-img-3.png'
import img4 from '../../../assets/images/service-img-4.png'
import img5 from '../../../assets/images/service-img-5.png'
import img6 from '../../../assets/images/service-img-5.png'





const services = [
    {
        title: 'Engineering Design',
        img: img1,
        subTitle: 'Driven by Design, Powered by Expertise',
        textLists: ['Advisory', 'Structural engineering design', 'Civil works design', 'Infrastructure design', 'Foundation engineering design']
    },
    {
        title: 'Advisory',
        img: img2,
        subTitle: 'Guiding Decisions, Driving Success',
        textLists: ['Sustaining development advisory', 'Project visibility & connecting nodes analysis', 'Operational readiness & transition']
    },
    {
        title: 'Civil works design',
        img: img3,
        subTitle: 'Innovative Civil Works, Built to Last',
        textLists: ['Earth works design', 'Embarkment & Retaining wall design', 'Slope stabilization design', 'Drainage design']
    },
    {
        title: 'Structural engineering design',
        img: img4,
        subTitle: 'Crafting Stability, Designing Excellence',
        textLists: ['Institutional design', 'Worship center design', 'Earth work supports design', 'Marine support', 'Steel structure design', 'Reinforced concrete support', 'Precast concrete design', 'Post tension concrete']
    },
    {
        title: 'Foundation engineering',
        img: img5,
        subTitle: 'Grounded in Expertise, Built on Reliability',
        textLists: ['Pier foundation design', 'Pile cap analysis & design', 'Pile-raft foundation design', 'Shallow foundation design', 'Basement design', 'Strap foundation analysis & design', 'Secant pile design', 'Floating foundation analysis & design']
    },
    {
        title: 'infrastructure planning',
        img: img6,
        subTitle: 'Crafting the Framework for Future Growth',
        textLists: ['Domestic & Industrial civil works planning', 'Storm & Drainage planning ']
    }
]




export default function Services(){

    const displayServices = services.map((service, i) => {
        const { title, img, subTitle, textLists } = service

        const diplayTextLists = textLists.map((textListItem, textListindex) => (
            <p 
                key={textListindex}
                style={{
                    borderRight: '1px solid #737373'
                }}
                className="m-0 p-0 px-3 fw-500 txt-737373 txt-14 font-family-DmSans"
            >
                {textListItem}
            </p>
        ))

        return(
            <div
                key={i}
                style={{
                    borderRadius: '25px',
                    borderTop: '1px solid #737373'
                }}
                className="d-lg-flex d-md-block d-block align-items-center justify-content-between py-3 px-lg-0 px-md-3 px-3"
            >
                <div className="col-lg-4 mb-lg-0 mb-md-4 mb-4">
                    <p className="m-0 p-0 txt-737373 fw-500 txt-12 font-family-DmSans">
                        0{i+1}
                    </p>
                    <p 
                        style={{ textTransform: 'uppercase' }}
                        className="m-0 p-0 py-2 txt-17 fw-600 txt-000 font-family-DmSans"
                    >
                        { title }
                    </p>
                </div>

                <div className="col-lg-3 mb-lg-0 mb-md-4 mb-4">
                    <img src={img} className="col-lg-12 col-md-12 col-12" />
                </div>

                <div className="col-lg-4 mb-lg-0 mb-md-4 mb-4">
                    <p className="m-0 p-0 txt-000 fw-500 font-family-DmSans txt-15 mb-3">
                        { subTitle }
                    </p>
                    <div style={{ gap: '15px' }} className="d-flex flex-wrap align-items-center justify-content-between">
                        { diplayTextLists }
                    </div>
                </div>
            </div>
        )
    })

    return(
        <div>
            <div className="d-flex align-items-center justify-content-start mb-5">
                <h1 
                    style={{
                        borderLeft: '1px solid #E37A16',
                        borderRight: '1px solid #E37A16',
                    }}
                    className="m-0 p-0 txt-E37A16 font-family-DmSans fw-500 txt-16 px-2"
                >
                    Our Services
                </h1>
            </div>

            <div>
                { displayServices }
            </div>            
        </div>
    )
}