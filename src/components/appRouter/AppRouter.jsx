import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../main/Main";
import CondoTracking from "../condoTracking/CondoTracking";


export default function AppRouter(){
    return(
        <Routes>   

            <Route 
                path="/"
                element={
                    <Main />
                }
            />            

            <Route 
                path="/condo-tracking"
                element={
                    <CondoTracking />
                }
            />

            <Route 
                path="*"
                element={
                    <Main />
                }
            />            
        </Routes>
    )
}