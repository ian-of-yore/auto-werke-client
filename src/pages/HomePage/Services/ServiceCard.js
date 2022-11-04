import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {

    const { _id, title, img, price } = service;

    return (
        <div className="card shadow-xl">
            <figure><img src={img} alt="Shoes" className='h-72' /></figure>
            <div className='flex justify-between items-center px-4'>
                <div className='text-left py-3'>
                    <p className='text-xl font-semibold'>{title}</p>
                    <p className='text-xl font-semibold'>Price: <span className='text-orange-800'>${price}</span></p>
                </div>
                <div>
                    <Link to={`/checkout/${_id}`}><button className='pt-2'><FaArrowRight className='h-7 w-7 text-orange-500'></FaArrowRight></button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;