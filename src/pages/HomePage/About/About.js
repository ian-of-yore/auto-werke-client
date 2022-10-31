import React from 'react';
import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className="hero mb-32 rounded-lg">
            <div className="hero-content p-0 flex-col lg:flex-row">
                <div className='relative w-1/2' style={{ height: "521px" }}>
                    <img src={person} className=" rounded-lg shadow-2xl" alt='' style={{ height: "470px", width: "530px" }} />
                    <img src={parts} className="absolute w-3/6 right-16 border-8 top-1/2 rounded-lg shadow-2xl" alt='' style={{ height: "327px", width: "340px" }} />
                </div>
                <div className='w-1/2'>
                    <p className='font-bold text-xl mb-4' style={{ color: "#FF3811" }}>About Us</p>
                    <h1 className="text-5xl font-bold">We are qualified <br />
                        & of experience <br />
                        in this field</h1>
                    <p className='w-5/6 mt-6'>There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in some
                        form, by injected humour, or randomised words which don't
                        look even slightly believable. </p>
                    <p className='w-5/6 mt-4'>the majority have suffered alteration in some form, by injected humour,
                        or randomised words which don't look even slightly believable. </p>
                    <button className="btn btn-wide btn-outline  text-white mt-6 bg-orange-700">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;