import React from 'react';
import './BannerItem.css';


const BannerItem = ({ slide }) => {

    const { image, prev, id, next } = slide;

    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carousel-img'>
                <img src={image} alt="" style={{ maxHeight: "85vh", width: "100vw" }} />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5 bg-slate-500">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle bg-orange-700">❯</a>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
                <h1 className='text-6xl font-bold text-white'>
                    Das Beste
                    <br />
                    Oder Nicht!
                </h1>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/2 w-2/5">
                <p className='text-xl font-semibold text-white'>There are many variations of passages of  available,
                    but the majority have suffered alteration in some form</p>
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 left-24 top-3/4 w-2/5">
                <button className="btn btn-outline btn-secondary mr-5">Discover More</button>
                <button className="btn btn-outline btn-warning">Latest Project</button>
            </div>
        </div>
    );
};

export default BannerItem;