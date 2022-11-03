import React from 'react';
import { Link } from 'react-router-dom';
import loginImg from '../../../assets/images/login/login.svg';
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
    return (
        <div className="w-9/12 mx-auto mb-10" style={{ height: "80vh" }}>
            <div className="hero-content flex-col lg:flex-row">
                <div className='mr-5'>
                    <img src={loginImg} alt="" style={{ height: "50vh" }} />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                    <h1 className='text-4xl text-center font-semibold pt-5'>Register</h1>
                    <div className="card-body">
                        <form>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Your name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" />
                            </div>
                        </form>
                        <div className="form-control mt-6">
                            <button className='h-11 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold'>Register</button>
                        </div>
                        <div className='text-center'>
                            <p className='mb-4'>Or Continue with</p>
                            <div className='flex justify-center mb-4 items-center'>
                                <button><FaFacebookF className='w-5 h-5 text-sky-900'></FaFacebookF></button>
                                <button><FaLinkedinIn className='mx-4 w-5 h-5 text-blue-700'></FaLinkedinIn></button>
                                <button><FcGoogle className='w-5 h-5'></FcGoogle></button>
                            </div>
                            <p>Already have an accout? <button><Link className='text-orange-600 font-semibold' to='/signin'>Sign In</Link></button></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;