import React from "react";


export default function CustomErrorMsg({ errorMsg, isCentered }){
    return(
        <p
            style={{
                textAlign: isCentered ? 'center' : 'left'
            }}
            className="txt-FF0000 font-family-DmSans txt-15 fw-600"
        >
            { errorMsg }
        </p>
    )
}