import React from "react";
import './NursingService.css';

const NursingService = ({ careService }) => {
  const { img, service, description } = careService;
  return (
    
      <div className="service col-lg-4 col-sm-6 col-12">
        <img className="img-container" src={img} alt="" />
        <h3>Service Name: {service}</h3>
        <p>{description}</p>
      </div>
    
  );
};

export default NursingService;
