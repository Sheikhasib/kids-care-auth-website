import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { id, name, description, img } = service;
  return (
    <div className="service pb-5">
      <img src={img} alt="" />
      <h3>{name}</h3>
      <p>{description}</p>
      <Link to={`/serviceDetails/${id}`}>
        <button className="btn btn-warning">Details</button>
      </Link>
    </div>
  );
};

export default Service;
