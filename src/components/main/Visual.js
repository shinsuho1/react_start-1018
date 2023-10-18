import React from "react";
import { Link } from 'react-router-dom';

function Visual() {
    return (
        <figure id="visual" className="myScroll">
            <video src={`${process.env.PUBLIC_URL}/img/vid.mp4`} loop muted autoPlay />
        </figure>
    );
}

export default Visual;
