import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const {serviceId} = useParams();
    const [data, setData] = useState([]);
    useEffect( () => {
        fetch('/fakeData.json')
        .then(res => res.json())
        .then(data => setData(data))
    }, [])
    // console.log(data);

    const serviceItem = data.filter( td => td.id === serviceId);
    console.log(serviceItem);

    return (
        <div>
            <h2>Our Service Details Page</h2>
            <h3>Image: {serviceItem[0]?.img}</h3>
            <h3>Service Name: {serviceItem[0]?.name}</h3>
            <h3>Description: {serviceItem[0]?.description}</h3>
        </div>
    );
};

export default ServiceDetails;