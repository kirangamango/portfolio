import React from 'react';

import resume from "../assets/kiran-resume.pdf";
import {Link} from "react-router-dom";

const DownloadPDF = () => {
  return (
    <Link to={resume} target="_blank">
      <button className="btn">Get Resume</button>
    </Link>
  )
}

export default DownloadPDF