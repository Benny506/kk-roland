import React, { useEffect, useState } from "react";
import logo1 from '../../assets/images/logo_1.png'
import { FaceBookSvg, InstagramSvg, LinkedInSvg, TwitterSvg } from "../svgs/CustomSvg";
import { onRequestApi } from "../apiRequests/requestApi";
import { toast } from "react-toastify";
import CustomErrorMsg from "../customErrorMsg/CustomErrorMsg";
import { Formik, ErrorMessage } from "formik";
import * as yup from 'yup'
import helpers from "../helpers/helpers";
import FullScreenLoader from "../loaders/FullScreenLoader";


export default function Footer(){

    const [apiReqs, setApiReqs] = useState({ isLoading: false, data: null, errorMsg: null })

    const validationSchema = yup.object().shape({
        fullName: yup.string().required("Full name is required"),
        email: yup.string().email("Must be a valid email address").required("Email is required"),
        msg: yup.string().required("Message is required!")
    })

    useEffect(() => {
        const { isLoading, data } = apiReqs

        if(isLoading && data){

            const { type, requestInfo } = data

            if(type == 'sendMsg'){
                onRequestApi({
                    requestInfo,
                    successCallBack: sendMsgSuccess,
                    failureCallback: sendMsgFailure
                })
            }
        }
    }, [apiReqs])

    const sendMsgSuccess = ({ result }) => {
        try {

            toast.success("Message Sent. We will contact you soonest")
            setApiReqs({ isLoading: false, data: null, errorMsg: null })

            return;

        } catch (error) {
            console.log(error)
            return sendMsgFailure({ errorMsg })
        }
    }

    const sendMsgFailure = ({ errorMsg }) => {
        setApiReqs({ isLoading: false, data: null, errorMsg })
        toast.error(errorMsg)
        return;
    }

    return(
        <div className="bg-000 p-lg-5 p-md-3 p-3">

            {
                apiReqs.isLoading && 
                    <FullScreenLoader tempLoading={true} />
            }

            <div className="d-flex flex-wrap mb-5 pb-4 align-items-center justify-content-between">

                <div className="col-lg-5 col-md-12 col-12 mb-lg-0 mb-md-4 mb-4">
                    <div className="col-lg-5 col-md-5 col-5 mb-4">
                        <img src={logo1} className="col-lg-12 col-md-12 col-12" />
                    </div>
                    <p className="m-0 p-0 txt-737373 txt-13 fw-500 font-family-DmSans">
                        We specialize in delivering innovative, dependable, and sustainable engineering solutions, 
                        shaping resilient infrastructure and advancing industry standards.
                    </p>
                </div>

                <div className="col-lg-5 col-md-12 col-12">

                    {
                        apiReqs.errorMsg
                        &&
                            <div className="py-3">
                                <CustomErrorMsg errorMsg={apiReqs.errorMsg} isCentered={true} />
                            </div>
                    }

                    <Formik
                        validationSchema={validationSchema}
                        initialValues={{
                            fullName: '', email: '', msg: ''
                        }}
                        onSubmit={(values, { resetForm }) => {
                            setApiReqs({
                                isLoading: true,
                                errorMsg: null,
                                data: {
                                    type: 'sendMsg',
                                    requestInfo: {
                                        url: '/public/send-email',
                                        method: 'POST',
                                        // data: values
                                        data: { },
                                        accessToken: helpers.accessToken
                                    }
                                }
                            })

                            // return resetForm()
                        }}
                    >
                        {({ values, dirty, handleBlur, handleChange, handleSubmit, isValid }) => (
                            <>                    
                                <div className="d-flex align-items-start justify-content-between mb-3">
                                    <div 
                                        style={{
                                            width: '48%'
                                        }}
                                    >
                                        <input 
                                            name="fullName"
                                            value={values.fullName}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            style={{
                                                borderRadius: '30px',
                                                border: '1px solid #737373',
                                            }}
                                            className="px-3 w-100 py-2 bg-tranparent fw-500 txt-14 txt-FFF font-family-DmSans"
                                            placeholder="Fullname"
                                        />
                                        <ErrorMessage 
                                            name="fullName" 
                                            render={
                                                errorMsg => <CustomErrorMsg isCentered={false} errorMsg={errorMsg} />
                                                } 
                                        /> 
                                    </div> 
                                    <div
                                        style={{
                                            width: '48%'
                                        }}
                                    >
                                        <input
                                            name="email"
                                            value={values.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur} 
                                            style={{
                                                borderRadius: '30px',
                                                border: '1px solid #737373',
                                            }}
                                            className="px-3 w-100 py-2 bg-tranparent fw-500 txt-14 txt-FFF font-family-DmSans"
                                            placeholder="Email address"
                                        />
                                        <ErrorMessage 
                                            name="email" 
                                            render={
                                                errorMsg => <CustomErrorMsg isCentered={false} errorMsg={errorMsg} />
                                                } 
                                        />                                                         
                                    </div>                                             
                                </div>
                                <div className="mb-4 w-100">
                                    <textarea 
                                        name="msg"
                                        value={values.msg}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        style={{
                                            borderRadius: '30px',
                                            border: '1px solid #737373',
                                            height: '15vh'
                                        }}
                                        className="px-3 py-2 bg-tranparent w-100 fw-500 txt-14 txt-FFF font-family-DmSans"
                                        placeholder="Write message"
                                    /> 
                                    <ErrorMessage 
                                        name="msg" 
                                        render={
                                            errorMsg => <CustomErrorMsg isCentered={false} errorMsg={errorMsg} />
                                            } 
                                    />                        
                                </div>                    
                                <button
                                    disabled={!(isValid && dirty) ? true : false}
                                    onClick={handleSubmit}
                                    type="submit"
                                    style={{
                                        borderRadius: '30px',
                                        opacity: !(isValid && dirty) ? 0.5 : 1
                                    }}
                                    className="bg-E37A16 px-4 py-2 text-center txt-FFF font-family-DmSans fw-600 txt-15 w-100"
                                >
                                    Send message
                                </button>
                            </>
                        )}
                    </Formik>
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