import React, { useEffect } from "react";
import ReactDOM from "react-dom";

const ALERT_STYLES = {
    width: "25%",
    left: "20px",
    bottom: "20px",
    zIndex: 1050,
    fontSize: "16px",
    position: "fixed",
    boxShadow: "8px 8px 8px rgba(0,0,0,0.6)"
}

function Alert(props) {
    useEffect(() => {
        const timer = setTimeout(() => {
            props.setShow({ show: false });
        }, 5000)

        return () => clearTimeout(timer);
    });

    if (!props.alert.show) return null;
    return ReactDOM.createPortal(
        <React.Fragment>
            <div style={ALERT_STYLES} className={`alert alert-md alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                {props.alert.text}
                <button type="button" className="btn-md btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={e => props.setShow({ show: false })}></button>
            </div>
        </React.Fragment>,
        document.getElementById("modal")
    )
}

export default Alert;