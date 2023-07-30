import MainLayout from '@/layouts/main.layout';
import Image from 'next/image';
import React from 'react';
import { AiFillStar } from 'react-icons/ai'

const StorageDetails = ({ data }) => {
    return (
        <div className='container py-5'>
            <div className="row">
                <div className="col-md-4">
                    <h5 className='fw-bold text-uppercase mb-5'>storage details</h5>
                    <Image src={data.image} width={300} height={300} alt="img" />
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
                                <li>capacity: {data.keyFeatures.capacity}</li>
                                <li>interface: {data.keyFeatures.interface}</li>
                                <li>form factor: {data.keyFeatures.formFactor}</li>
                                <li>read speed: {data.keyFeatures.readSpeed}</li>
                                <li>write speed: {data.keyFeatures.writeSpeed}</li>
                            </ul>
                        </li>

                    </ul>
                    <div>
                    </div>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-md-6">
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

export default StorageDetails;
StorageDetails.getLayout = function getLayout(page) {
    return <MainLayout>{page}</MainLayout>;
};
export const getStaticPaths = async () => {
    const res = await fetch("https://kbutsho-pc-builder-server.vercel.app/storage");
    const storages = await res.json();
    const paths = storages.map((s) => ({
        params: { storageId: s.id }
    }));
    return { paths, fallback: false }
}
export const getStaticProps = async (context) => {
    const { params } = context;
    const res = await fetch(`https://kbutsho-pc-builder-server.vercel.app/storage/${params.storageId}`);
    const data = await res.json();
    return {
        props: {
            data: data
        },
        revalidate: 30
    };
};