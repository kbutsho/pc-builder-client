import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <div className='banner'>
            <div className="container">
                <div className="row ">
                    <div className="col-md-7"></div>
                    <div className="col-md-5">
                        <div className='d-flex align-items-center' style={{ height: "85vh" }}>
                            <div>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, quia! Laborum beatae quae at nulla, cumque nihil dignissimos dolorem possimus repellendus est repellat nesciunt culpa. Mollitia, optio quibusdam maiores maxime quae corrupti laudantium ducimus? Dignissimos, atque. Eum id quaerat corporis exercitationem laborum voluptate officiis, quas, totam suscipit magni, quos recusandae?</p>
                                <Link className='btn btn-primary px-3 fw-bold' href="/build">Build your own PC!</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;