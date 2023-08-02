import MainLayout from '@/layouts/main.layout';
import React from 'react';
import cpu from '../../images/cpu.png'
import monitor from '../../images/monitor.png'
import motherboard from '../../images/motherboard.png'
import ram from '../../images/ram.png'
import power from '../../images/power.png'
import storage from '../../images/storage.png'
// import other from '../../images/other.png'
import Image from 'next/image';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { removeAll, removeFromComponents } from '@/redux/componentSlice';
import { useRouter } from 'next/router';

const PCBuild = () => {
    const components = useSelector((state) => state.components.components);
    const cpuData = components.find((component) => component.data.category === "cpu");
    const monitorData = components.find((component) => component.data.category === "monitor");
    const ramData = components.find((component) => component.data.category === "ram");
    const storageData = components.find((component) => component.data.category === "storage");
    const powerData = components.find((component) => component.data.category === "power-supply");
    const motherboardData = components.find((component) => component.data.category === "mother-board");
    const totalPrice = components.reduce((total, component) => total + component.data.price, 0);
    const dispatch = useDispatch();
    const handleRemoveComponent = (data) => {
        dispatch(removeFromComponents(data));
    };
    const router = useRouter();
    const buildCompleteHandel = () => {
        dispatch(removeAll());
        router.push("/");
    }
    return (
        <div className='container py-5'>
            <div className='row'>
                <div className='col-md-6'>
                    <h4 className='fw-bold text-uppercase'>PC Builder</h4>
                    <h5 className='fw-bold'> Build your own PC</h5>
                </div>
                <div className='col-md-6 d-flex justify-content-end'>
                    <div>
                        <h4 className='fw-bold text-uppercase'>Total price {totalPrice}$</h4>
                        <div className='d-flex justify-content-end'>
                            {
                                components.length >= 5 ?
                                    <button className='btn btn-primary fw-bold' onClick={() => buildCompleteHandel()}>complete build</button> :
                                    <button disabled className='btn btn-primary fw-bold' onClick={() => buildCompleteHandel()}>complete build</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-5'>
                <div className='build-category'>
                    <div className='row' style={{ minWidth: "350px" }}>
                        <div className='col-md-2'>
                            <Image src={cpu} height={60} width={60} alt="img" />
                            <h6 className='fw-bold text-uppercase mt-3'>Processor</h6>
                        </div>
                        <div className='col-md-2'>
                            {cpuData ? <Image priority={true} src={cpuData.data.image} width={130} height={130} alt="img" /> : null}
                        </div>
                        <div className='col-md-7'>
                            {cpuData ? (
                                <div>
                                    <h6>{cpuData.data.name}</h6>
                                    <ul>
                                        <li>{cpuData.data.keyFeatures.specification}</li>
                                        <li>{cpuData.data.keyFeatures.clockSpeed}</li>
                                        <li>TWP {cpuData.data.keyFeatures.tdp}</li>
                                        <li>Price {cpuData.data.price}</li>
                                    </ul>
                                </div>
                            ) : null}
                        </div>
                        <div className="col-md-1 d-flex align-items-end">
                            {cpuData ?
                                <button className='btn btn-danger select-btn fw-bold' onClick={() => handleRemoveComponent({ data: cpuData.data })}>remove</button>
                                : <Link className='btn btn-primary select-btn fw-bold' href="/build/select?category=cpu">select</Link>
                            }
                        </div>
                    </div>
                </div>
                <div className='build-category'>
                    <div className='row' style={{ minWidth: "350px" }}>
                        <div className='col-md-2'>
                            <Image src={motherboard} height={60} width={60} alt="img" />
                            <h6 className='fw-bold text-uppercase mt-3'>Motherboard</h6>
                        </div>
                        <div className='col-md-2'>
                            {motherboardData ? <Image priority={true} src={motherboardData.data.image} width={130} height={130} alt="img" /> : null}
                        </div>
                        <div className='col-md-7'>
                            {motherboardData ? (
                                <div>
                                    <h6>{motherboardData.data.name}</h6>
                                    <ul>
                                        <li>{motherboardData.data.keyFeatures.memorySlots}</li>
                                        <li>{motherboardData.data.keyFeatures.storage}</li>
                                        <li>{motherboardData.data.keyFeatures.ports}</li>
                                        <li>Price {motherboardData.data.price}</li>
                                    </ul>
                                </div>
                            ) : null}
                        </div>
                        <div className="col-md-1 d-flex align-items-end">
                            {motherboardData ?
                                <button className='btn btn-danger select-btn fw-bold' onClick={() => handleRemoveComponent({ data: motherboardData.data })}>remove</button>
                                : <Link className='btn btn-primary select-btn fw-bold' href="/build/select?category=mother-board">select</Link>
                            }
                        </div>
                    </div>
                </div>
                <div className='build-category'>
                    <div className='row' style={{ minWidth: "350px" }}>
                        <div className='col-md-2'>
                            <Image src={ram} height={60} width={60} alt="img" />
                            <h6 className='fw-bold text-uppercase mt-3'>Ram</h6>
                        </div>
                        <div className='col-md-2'>
                            {ramData ? <Image priority={true} src={ramData.data.image} width={130} height={130} alt="img" /> : null}
                        </div>
                        <div className='col-md-7'>
                            {ramData ? (
                                <div>
                                    <h6>{ramData.data.name}</h6>
                                    <ul>
                                        <li>{ramData.data.keyFeatures.capacity}</li>
                                        <li>{ramData.data.keyFeatures.speed}</li>
                                        <li>{ramData.data.keyFeatures.type}</li>
                                        <li>Price {ramData.data.price}</li>
                                    </ul>
                                </div>
                            ) : null}
                        </div>
                        <div className="col-md-1 d-flex align-items-end">
                            {ramData ?
                                <button className='btn btn-danger select-btn fw-bold' onClick={() => handleRemoveComponent({ data: ramData.data })}>remove</button>
                                : <Link className='btn btn-primary select-btn fw-bold' href="/build/select?category=ram">select</Link>
                            }
                        </div>
                    </div>
                </div>
                <div className='build-category'>
                    <div className='row' style={{ minWidth: "350px" }}>
                        <div className='col-md-2'>
                            <Image src={monitor} height={60} width={60} alt="img" />
                            <h6 className='fw-bold text-uppercase mt-3'>monitor</h6>
                        </div>
                        <div className='col-md-2'>
                            {monitorData ? <Image priority={true} src={monitorData.data.image} width={130} height={130} alt="img" /> : null}
                        </div>
                        <div className='col-md-7'>
                            {monitorData ? (
                                <div>
                                    <h6>{monitorData.data.name}</h6>
                                    <ul>
                                        <li>{monitorData.data.keyFeatures.displaySize}</li>
                                        <li>{monitorData.data.keyFeatures.resolution}</li>
                                        <li>{monitorData.data.keyFeatures.refreshRate}</li>
                                        <li>Price {monitorData.data.price}</li>
                                    </ul>
                                </div>
                            ) : null}
                        </div>
                        <div className="col-md-1 d-flex align-items-end">
                            {monitorData ?
                                <button className='btn btn-danger select-btn fw-bold' onClick={() => handleRemoveComponent({ data: monitorData.data })}>remove</button>
                                : <Link className='btn btn-primary select-btn fw-bold' href="/build/select?category=monitor">select</Link>
                            }
                        </div>
                    </div>
                </div>
                <div className='build-category'>
                    <div className='row' style={{ minWidth: "350px" }}>
                        <div className='col-md-2'>
                            <Image src={power} height={60} width={60} alt="img" />
                            <h6 className='fw-bold text-uppercase mt-3'>power supply</h6>
                        </div>
                        <div className='col-md-2'>
                            {powerData ? <Image priority={true} src={powerData.data.image} width={130} height={130} alt="img" /> : null}
                        </div>
                        <div className='col-md-7'>
                            {powerData ? (
                                <div>
                                    <h6>{powerData.data.name}</h6>
                                    <ul>
                                        <li>{powerData.data.keyFeatures.wattage}</li>
                                        <li>{powerData.data.keyFeatures.certification}</li>
                                        <li>{powerData.data.keyFeatures.efficiency}</li>
                                        <li>Price {powerData.data.price}</li>
                                    </ul>
                                </div>
                            ) : null}
                        </div>
                        <div className="col-md-1 d-flex align-items-end">
                            {powerData ?
                                <button className='btn btn-danger select-btn fw-bold' onClick={() => handleRemoveComponent({ data: powerData.data })}>remove</button>
                                : <Link className='btn btn-primary select-btn fw-bold' href="/build/select?category=power-supply">select</Link>
                            }
                        </div>
                    </div>
                </div>
                <div className='build-category'>
                    <div className='row' style={{ minWidth: "350px" }}>
                        <div className='col-md-2'>
                            <Image src={storage} height={60} width={60} alt="img" />
                            <h6 className='fw-bold text-uppercase mt-3'>storage</h6>
                        </div>
                        <div className='col-md-2'>
                            {storageData ? <Image priority={true} src={storageData.data.image} width={130} height={130} alt="img" /> : null}
                        </div>
                        <div className='col-md-7'>
                            {storageData ? (
                                <div>
                                    <h6>{storageData.data.name}</h6>
                                    <ul>
                                        <li>{storageData.data.keyFeatures.capacity}</li>
                                        <li>{storageData.data.keyFeatures.interface}</li>
                                        <li>{storageData.data.keyFeatures.formFactor}</li>
                                        <li>Price {storageData.data.price}</li>
                                    </ul>
                                </div>
                            ) : null}
                        </div>
                        <div className="col-md-1 d-flex align-items-end">
                            {storageData ?
                                <button className='btn btn-danger select-btn fw-bold' onClick={() => handleRemoveComponent({ data: storageData.data })}>remove</button>
                                : <Link className='btn btn-primary select-btn fw-bold' href="/build/select?category=storage">select</Link>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PCBuild;

PCBuild.getLayout = function getLayout(page) {
    return <MainLayout>{page}</MainLayout>;
};


