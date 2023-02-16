import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../image/pexels-torsten-dettlaff-193004.jpg'

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={banner} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold"> Solis mobile </h1>
                        <p className="py-6">  Solis is one of the greatest
                            manufacture mobile company in Bangladesh. <br />
                            It has 400 branch in all over the country. </p>
                       
                        <Link to='/products' > <button className="btn btn-primary">Get Started</button> </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;