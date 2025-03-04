import React from "react";
import { ourWorks } from './ourWorksAux'


export default function DisplaySingleWork({ singleWork, singleImgClick }){

    if(!singleWork) return <></>

    const { img, title, text, id } = singleWork

    const handleImgClick = () => {
        if(!singleImgClick) return;

        const workIds = ourWorks.map(work => work.id)

        let next;
        let prev;
        let current;

        //is the last work
        if(id == workIds[workIds.length - 1]){
            next = singleWork
            current = ourWorks[ourWorks.length - 2]
            prev = ourWorks[ourWorks.length - 3]

            return singleImgClick({ next, current, prev })
        }

        //is the first work
        else if(id == 0){
            prev = singleWork
            current = ourWorks[1]
            next = ourWorks[2]

            return singleImgClick({ next, current, prev })
        }

        //is neither the first or last work
        else{
            current = singleWork
            prev = ourWorks[id - 1]
            next = ourWorks[id + 1]

            return singleImgClick({ next, current, prev })
        }
    }

    return (
        <div 
            onClick={handleImgClick}
            className={`${img} bg-img d-flex align-items-end justify-content-start clickable`}
            style={{
                height: '414px'
            }}
        >
            <div
                style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.45)',
                    borderTopRightRadius: '8px',
                    width: '95%'
                }}
                className="py-2 px-3"
            >
                <h1 className="m-0 p-0 txt-FFF font-family-DmSans fw-600 txt-17 mb-2">
                    { title }
                </h1>
                <p className="m-0 p-0 txt-FFF font-familiy-DmSans txt-15">
                    { text }
                </p>
            </div>
        </div>
    )
}