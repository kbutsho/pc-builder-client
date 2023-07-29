import Link from 'next/link';
import React from 'react';

const MainLayout = ({ children }) => {
    return (
        <div>
            <div className='header'>
                <nav className="navbar navbar-expand-lg bg-primary">
                    <div className="container">
                        <Link className="navbar-brand fw-bold text-white" href="/">PC House</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav ms-auto text-uppercase fw-bold">
                                <a className="nav-link text-white" href="#">Home</a>
                                <div className="dropdown">
                                    <a className="nav-link text-white dropdown-toggle"
                                        data-bs-toggle="dropdown"
                                        style={{ cursor: "pointer" }}
                                        aria-expanded="false">
                                        category
                                    </a>
                                    <ul className="dropdown-menu fw-bold text-capitalize">
                                        <li><a className="dropdown-item" href="/category/cpu">CPU/Processor</a></li>
                                        <li><a className="dropdown-item" href="/category/motherboard">Motherboard</a></li>
                                        <li><a className="dropdown-item" href="/category/ram">RAM</a></li>
                                        <li><a className="dropdown-item" href="/category/power-supply">Power Supply</a></li>
                                        <li><a className="dropdown-item" href="/category/storage">Storage Device</a></li>
                                        <li><a className="dropdown-item" href="/category/monitor">Monitor</a></li>
                                        <li><a className="dropdown-item" href="/category/others">Others</a></li>
                                    </ul>
                                </div>
                                <a className="nav-link text-white" href="/login">Login</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <div style={{ background: '#E6FFFD' }}>
                <div className='main-area' style={{ minHeight: "85vh" }}>
                    {children}
                </div>
                <div className='footer text-center'>
                    <small className='fw-bold'>all rights reserved by kbutsho</small>
                </div>
            </div>
        </div>
    );
};

export default MainLayout;