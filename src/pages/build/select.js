import MainLayout from '@/layouts/main.layout';
import { addToComponents } from '@/redux/componentSlice';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { useDispatch } from 'react-redux';

const SelectComponent = ({ data }) => {
    const router = useRouter();
    const { category } = router.query;
    const filteredData = data.filter((item) => item.category === category);
    const dispatch = useDispatch();
    const handleSelectComponent = (data) => {
        dispatch(addToComponents(data));
        router.push("/build");
    };

    return (
        <div className='container py-5'>
            <h4 className='fw-bold text-uppercase mb-5'>Select {category}</h4>
            {
                filteredData.length > 0 ? (
                    filteredData.map((item, index) => (
                        <div key={index} className='select-item'>
                            <div className="row">
                                <div className="col-md-2">
                                    <Image src={item.image} height={150} width={150} alt="img" />
                                </div>

                                <div className='col-md-2'>
                                    <h6 className='fw-bold text-danger'>{item.name}</h6>
                                    <ul>
                                        <li><span className='fw-bold'>Price</span> {item.price}</li>
                                        <li><span className='fw-bold'>Status</span> {item.status}</li>
                                        <li><span className='fw-bold'>Rating</span> {item.averageRating}</li>
                                    </ul>
                                </div>
                                <div className='col-md-7'>
                                    <h6 className='fw-bold text-danger'>Key Features</h6>
                                    <ul>


                                        {item.keyFeatures.specification ? <li>Specification: {item.keyFeatures.specification}</li> : null}
                                        {item.keyFeatures.tdp ? <li>Thermal design power: {item.keyFeatures.tdp}</li> : null}
                                        {item.keyFeatures.clockSpeed ? <li>Clock Speed: {item.keyFeatures.clockSpeed}</li> : null}

                                        {item.keyFeatures.capacity ? <li>Capacity: {item.keyFeatures.capacity}</li> : null}
                                        {item.keyFeatures.interface ? <li>Interface: {item.keyFeatures.interface}</li> : null}
                                        {item.keyFeatures.formFactor ? <li>Form Factor: {item.keyFeatures.formFactor}</li> : null}

                                        {item.keyFeatures.displaySize ? <li>Display Size: {item.keyFeatures.displaySize}</li> : null}
                                        {item.keyFeatures.resolution ? <li>Resolution: {item.keyFeatures.resolution}</li> : null}
                                        {item.keyFeatures.refreshRate ? <li>Refresh Rate: {item.keyFeatures.refreshRate}</li> : null}

                                        {item.keyFeatures.wattage ? <li>Wattage: {item.keyFeatures.wattage}</li> : null}
                                        {item.keyFeatures.certification ? <li>Certification: {item.keyFeatures.certification}</li> : null}
                                        {item.keyFeatures.efficiency ? <li>Efficiency: {item.keyFeatures.efficiency}</li> : null}

                                        {item.keyFeatures.chipset ? <li>Chipset: {item.keyFeatures.chipset}</li> : null}
                                        {item.keyFeatures.memorySlots ? <li>Memory Slots: {item.keyFeatures.memorySlots}</li> : null}
                                        {item.keyFeatures.expansionSlots ? <li>Expansion Slots: {item.keyFeatures.expansionSlots}</li> : null}

                                        {item.keyFeatures.speed ? <li>Speed: {item.keyFeatures.speed}</li> : null}
                                        {item.keyFeatures.type ? <li>Type: {item.keyFeatures.type}</li> : null}
                                    </ul>
                                </div>
                                <div className="col-md-1 d-flex align-items-end">
                                    <button onClick={() => handleSelectComponent({ data: item })} className='btn btn-primary px-3 fw-bold'>select</button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className='d-flex justify-content-center align-items-center' style={{ minHeight: "60vh" }}>
                        <h4 className='text-danger fw-bold'>No data found for category {category}</h4>
                    </div>
                )
            }
        </div>
    );
};

export default SelectComponent;

SelectComponent.getLayout = function getLayout(page) {
    return <MainLayout>{page}</MainLayout>;
};

export const getServerSideProps = async () => {
    const response1 = await fetch("https://kbutsho-pc-builder-server.vercel.app/cpu");
    const response2 = await fetch("https://kbutsho-pc-builder-server.vercel.app/mother-board");
    const response3 = await fetch("https://kbutsho-pc-builder-server.vercel.app/ram");
    const response4 = await fetch("https://kbutsho-pc-builder-server.vercel.app/power-supply");
    const response5 = await fetch("https://kbutsho-pc-builder-server.vercel.app/storage");
    const response6 = await fetch("https://kbutsho-pc-builder-server.vercel.app/monitor");
    const response7 = await fetch("https://kbutsho-pc-builder-server.vercel.app/others");
    const data1 = await response1.json();
    const data2 = await response2.json();
    const data3 = await response3.json();
    const data4 = await response4.json();
    const data5 = await response5.json();
    const data6 = await response6.json();
    const data7 = await response7.json();
    const allData = [...data1, ...data2, ...data3, ...data4, ...data5, ...data6, ...data7];
    return {
        props: {
            data: allData
        }
    };
};

