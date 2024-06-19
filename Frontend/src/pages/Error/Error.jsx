import React from "react";
import { Link } from "react-router-dom";
import './Error.css'

const Error = () => {
  return (
    
      <div className="pnf">
        <Helmet>
          <meta charSet="utf-8" />
          <title>404 Not Found </title>
        </Helmet>
        <h1 className="pnf-title">404</h1>
        <h2 className="pnf-heading">Oops ! Page Not Found</h2>
        <Link to="/" className="pnf-btn">
          Go Back
        </Link>
      </div>
  
  );
};

export default Error;