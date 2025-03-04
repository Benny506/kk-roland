import React from "react";
import company1 from '../../../assets/images/company-clients-img-1.png'
import company2 from '../../../assets/images/company-clients-img-2.png'
import company3 from '../../../assets/images/company-clients-img-3.png'
import company4 from '../../../assets/images/company-clients-img-4.png'
import company5 from '../../../assets/images/company-clients-img-5.png'
import company6 from '../../../assets/images/company-clients-img-6.png'
import company7 from '../../../assets/images/company-clients-img-7.png'


export default function CompanyClients(){

    const displayCompanyClients = [company1, company2, company3, company4, company5, company6, company7].map((company, i) => {
        return (
            <div>
                <img src={company} width={'120px'} />
            </div>
        )
    })

    return(
        <div>
            <div className="w-100 d-flex flex-column align-items-center justify-content-center">
                <div className="d-flex align-items-center justify-content-start mb-4 pb-3">
                    <h1 
                        style={{
                            borderLeft: '1px solid #E37A16',
                            borderRight: '1px solid #E37A16',
                        }}
                        className="m-0 p-0 txt-E37A16 font-family-DmSans fw-500 txt-16 px-2"
                    >
                        Companies We Serve
                    </h1>
                </div>   

                <div className="d-flex align-items-center justify-content-center">
                    <div style={{ gap: '60px' }} className="d-flex align-items-center w-100 justify-content-between flex-wrap">
                        { displayCompanyClients }
                    </div>
                </div>             
            </div>
        </div>
    )
}