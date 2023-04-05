import "../components/AboutContentStyles.css";
import React1 from "../assets/react1.jpg";
import React2 from "../assets/react2.webp";

import React from 'react';
import {Link} from 'react-router-dom';
import DownloadPDF from '../components/DownloadPDF';

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who am I?</h1>
            <p></p>
            <div className="about-know">
                <Link to='/contact'>
                    <button className="btn contact-btn">Contact</button>
                </Link>
                <DownloadPDF />
            </div>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={React1} className="img-react" alt="true"/>
                </div>
                <div className="img-stack bottom">
                    <img src={React2} className="img-react" alt="true"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent