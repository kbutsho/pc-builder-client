import CpuCard from '@/components/CpuCard';
import MainLayout from '@/layouts/main.layout';
import React from 'react';


const CPU = ({ data }) => {
    return (
        <div>
            <div className='container'>
                <div className="row">
                    {
                        data.map((cpu) => <CpuCard cpu={cpu} key={cpu.id} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default CPU;
CPU.getLayout = function getLayout(page) {
    return <MainLayout>{page}</MainLayout>;
};

export const getStaticProps = async () => {
    const res = await fetch("https://kbutsho-pc-builder-server.vercel.app/cpu");
    const data = await res.json();
    return {
        props: {
            data: data
        },
        revalidate: 30
    };
};