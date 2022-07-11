import React from "react";
import ReactDOM from "react-dom";

const OVERLAY_STYLES = {
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
    zIndex: 1000
}

const ALERT_STYLES = {
    position: "fixed",
    top: "25%",
    left: "50%",
    transform: "translate(-50%, -75%)",
    zIndex: 1000,
    width: "30%"
}

function Modal(props) {
    if (!props.open) return null;
    return ReactDOM.createPortal(
        <React.Fragment>
            <div style={OVERLAY_STYLES}></div>
            <div style={ALERT_STYLES} className={`alert alert-${props.type} alert-dismissible fade show`} role="alert">
                {props.text}
                <button type="button" className="btn-md btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={e => props.setShow({ show: false })}></button>
            </div>
        </React.Fragment>,
        document.getElementById("modal")
    )
}

export default Modal;