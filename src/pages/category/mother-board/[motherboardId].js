import MainLayout from '@/layouts/main.layout';
import Image from 'next/image';
import React from 'react';
import { AiFillStar } from 'react-icons/ai'

const MotherboardDetails = ({ data }) => {
    return (
        <div className='container py-5'>
            <div className="row">
                <div className="col-md-4">
                    <h5 className='fw-bold text-uppercase'>Mother board details</h5>
                    <Image src={data.image} width={300} height={300} responsive={true} />
                </div>
                <div className="col-md-8">
                    <h5>{data.name} {data.category}</h5>
                    <h6>{data.description}</h6>
                    <ul className='list-unstyled'>
                        <li>{data.status}</li>
                        <li>price {data.price}</li>
                        <li>rating {data.averageRating} <AiFillStar color="red" /></li>
                        <li>
                            <span className='fw-bold'>key features</span>
                            <ul>
                                <li>brand: {data.keyFeatures.brand}</li>
                                <li>socket: {data.keyFeatures.socket}</li>
                                <li>model: {data.keyFeatures.model}</li>
                                <li>chipset: {data.keyFeatures.chipset}</li>
                                <li>memorySlots: {data.keyFeatures.memorySlots}</li>
                                <li>expansion slots: {data.keyFeatures.expansionSlots}</li>
                                <li>storage: {data.keyFeatures.storage}</li>
                                <li>ports: {data.keyFeatures.ports}</li>
                                <li>form factor: {data.keyFeatures.formFactor}</li>
                            </ul>
                        </li>
                    </ul>
                    <div>
                    </div>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-md-4">
                    <ul className='list-unstyled'>
                        <li>
                            <span className='fw-bold'>reviews</span>
                            <ul>
                                {data.reviews.map((review, index) =>
                                    <span key={index}>
                                        <li>{review.comment}</li>
                                    </span>
                                )}
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <ul className='list-unstyled'>
                        <li>
                            <span className='fw-bold'>ratings</span>
                            <ul>
                                {data.rating.map((rating, index) =>
                                    <span key={index}>
                                        <li>{rating.rating} <AiFillStar color="red" style={{ marginBottom: "3px" }} /></li>
                                    </span>
                                )}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MotherboardDetails;
MotherboardDetails.getLayout = function getLayout(page) {
    return <MainLayout>{page}</MainLayout>;
};
export const getStaticPaths = async () => {
    const res = await fetch("https://kbutsho-pc-builder-server.vercel.app/mother-board");
    const motherboards = await res.json();
    const paths = motherboards.map((board) => ({
        params: { motherboardId: board.id }
    }));
    return { paths, fallback: false }
}
export const getStaticProps = async (context) => {
    const { params } = context;
    const res = await fetch(`https://kbutsho-pc-builder-server.vercel.app/mother-board/${params.motherboardId}`);
    const data = await res.json();
    return {
        props: {
            data: data
        },
        revalidate: 30
    };
};