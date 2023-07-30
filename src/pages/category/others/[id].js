import MainLayout from '@/layouts/main.layout';
import Image from 'next/image';
import React from 'react';
import { AiFillStar } from 'react-icons/ai'

const OthersDetails = ({ data }) => {
    return (
        <div className='container py-5'>
            <div className="row">
                <div className="col-md-4">
                    <h5 className='fw-bold text-uppercase mb-5'>{data.category} details</h5>
                    <Image src={data.image} width={250} height={250} alt="img" />
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
                                <li>model: {data.keyFeatures.model}</li>
                                {data.keyFeatures.dpi ? <li>dpi: {data.keyFeatures.dpi}</li> : null}
                                {data.keyFeatures.buttons ? <li>buttons: {data.keyFeatures.buttons}</li> : null}
                                {data.keyFeatures.pollingRate ? <li>polling rate: {data.keyFeatures.pollingRate}</li> : null}
                                {data.keyFeatures.gripStyle ? <li>grip style: {data.keyFeatures.gripStyle}</li> : null}
                                {data.keyFeatures.connectivity ? <li>connectivity: {data.keyFeatures.connectivity}</li> : null}
                                {data.keyFeatures.sound ? <li>sound: {data.keyFeatures.sound}</li> : null}
                                {data.keyFeatures.microphone ? <li>microphone: {data.keyFeatures.microphone}</li> : null}
                                {data.keyFeatures.batteryLife ? <li>battery life: {data.keyFeatures.batteryLife}</li> : null}
                                {data.keyFeatures.keySwitches ? <li>key switches: {data.keyFeatures.keySwitches}</li> : null}
                                {data.keyFeatures.backlighting ? <li>backlighting: {data.keyFeatures.backlighting}</li> : null}
                                {data.keyFeatures.additionalControls ? <li>additional controls: {data.keyFeatures.additionalControls}</li> : null}
                                {data.keyFeatures.memory ? <li>memory: {data.keyFeatures.memory}</li> : null}
                                {data.keyFeatures.coreClock ? <li>core clock: {data.keyFeatures.coreClock}</li> : null}
                                {data.keyFeatures.boostClock ? <li>boost clock: {data.keyFeatures.boostClock}</li> : null}
                                {data.keyFeatures.busWidth ? <li>bus width: {data.keyFeatures.busWidth}</li> : null}
                                {data.keyFeatures.connectors ? <li>connectors: {data.keyFeatures.connectors}</li> : null}
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

export default OthersDetails;
OthersDetails.getLayout = function getLayout(page) {
    return <MainLayout>{page}</MainLayout>;
};
export const getStaticPaths = async () => {
    const res = await fetch("https://kbutsho-pc-builder-server.vercel.app/others");
    const others = await res.json();
    const paths = others.map((others) => ({
        params: { id: others.id }
    }));
    return { paths, fallback: false }
}
export const getStaticProps = async (context) => {
    const { params } = context;
    const res = await fetch(`https://kbutsho-pc-builder-server.vercel.app/others/${params.id}`);
    const data = await res.json();
    return {
        props: {
            data: data
        },
        revalidate: 30
    };
};