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

const STYLES = {
    zIndex: 1050,
    top: "50%",
    left: "50%",
    width: "3rem",
    height: "3rem",
    position: "absolute"
}

function Loading(props) {
    if (!props.show) return null;
    return ReactDOM.createPortal(
        <React.Fragment>
            <div style={OVERLAY_STYLES}></div>
            <div style={STYLES} className="spinner-border text-primary" role="status">
            </div>
        </React.Fragment>,
        document.getElementById("modal")
    )
}

export default Loading;