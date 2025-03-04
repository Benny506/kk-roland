import React from "react";
import { Modal } from "react-bootstrap";
import { MdCancelPresentation } from "react-icons/md";
import DisplaySingleWork from "./DisplaySingleWork";


export default function ViewThreeWorksModal({ modalProps, threeWorks }){

    if(!modalProps) return <></>

    const { visible, hide } = modalProps

    const displayThreeWorks = threeWorks && threeWorks.map((work, i) => {
        return(
            <div
                key={i}
                className="col-lg-4 px-2 col-md-12 col-12 mb-lg-0 mb-md-4 mb-4"
            >
                <DisplaySingleWork 
                    singleWork={work}
                />
            </div>
        )
    })

    return(
        <Modal
            size="xl"
            show={visible}
            onHide={hide}
            backdrop={"static"}
        >
            <div className="view-three-works-modal-container bg-000">
                <div className="mb-4">
                    <MdCancelPresentation color="#fff" size={50} className="clickable" onClick={hide} />
                </div>

                <div className="d-flex justify-content-between align-items-center">
                    { displayThreeWorks }
                </div>
            </div>
        </Modal>
    )
}