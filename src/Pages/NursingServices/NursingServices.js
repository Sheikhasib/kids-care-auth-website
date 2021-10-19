import React from 'react';
import NursingService from '../NursingService/NursingService';
import './NursingServices.css';

const careServices = [
    {
        img: 'https://i.ibb.co/vwFdmq0/nursing-4.png',
        service: 'Emotional support and companionship',
        description: 'When a child is sick, they lose out on opportunities to make and socialize with friends. A private duty nurse goes a long way to making an ill child feel less isolated.'
    },
    {
        img: 'https://i.ibb.co/kQzdRSF/nursing-1.png',
        service: 'Personal hygiene and self-care',
        description: 'Some of our patients may need extra help with bathing, grooming, and other hygiene tasks. If this is the case for your child, we’re ready to help.'
    },
    {
        img: 'https://i.ibb.co/2MgNC0c/nursing-3.png',
        service: 'Getting around',
        description: ' Depending on your child’s condition, mobility may be a struggle. Private duty nursing services for kids mean someone will be around to make sure your child can move.'
    },
    {
        img: 'https://i.ibb.co/8jk88Vz/nursing-6.png',
        service: 'Communication',
        description: 'Private duty nurses are the crucial go-between for parents and healthcare providers. Nurses will be able to decipher doctors’ instructions and make sure you and your child understand the treatment plan.'
    }
];

const NursingServices = () => {
    return (
        <div id="nursingServices" className="container">
            <h2 className="mb-5">Kids Nursing Services</h2>
            <div className="row">
                {
                    careServices.map(careService => <NursingService 
                        key={careService.service}
                        careService={careService}
                    ></NursingService>)
                }
            </div>
        </div>
    );
};

export default NursingServices;

