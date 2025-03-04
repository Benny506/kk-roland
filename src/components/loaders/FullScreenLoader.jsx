import React from 'react'
import './css/loaders.css'


export default function FullScreenLoader({ tempLoading }){

    if(!tempLoading) return <></>

    return(
        <div className="full-screen-loading-container">
            <div className="full-screen-loader" />
        </div>
    )
}