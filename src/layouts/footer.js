import Link from 'next/link';
import React from 'react';
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs'

const Footer = () => {
    return (
        <div className='bg-dark pt-5 pb-4 text-white'>
            <div className='container'>
                <div className="row">
                    <div className="col-md-4">
                        <h6>ADDRESS</h6>
                        <ul className='list-unstyled'>
                            <li className='fw-bold'>PC House Ltd</li>
                            <li> Head Office: 28 Kazi Nazrul Islam Ave, </li>
                            <li>Navana Zohura Square, Dhaka 1000</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h6>IMPORTANT LINKS</h6>
                        <ul className='list-unstyled' >
                            <li><Link className='footerLink' href="/category/cpu">CPU</Link></li>
                            <li><Link className='footerLink' href="/category/ram">RAM</Link></li>
                            <li><Link className='footerLink' href="/category/monitor">Monitor</Link></li>
                            <li><Link className='footerLink' href="/category/mother-board">Motherboard</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h6>STAY CONNECTED</h6>
                        <div className='d-flex mt-3'>
                            <BsFacebook size="24px" />
                            <AiFillTwitterCircle size="26px" className='mx-3' />
                            <AiFillInstagram size="30px" />
                        </div>
                        <a className='btn btn-danger fw-bold btn-sm mt-3' href="tel:+8801749555864">call +8801749555864</a>
                    </div>
                </div>
                <p className='text-center pt-5 fw-bold'>all rights reserved by kbutsho</p>
            </div>
        </div>
    );
};

export default Footer;