import PowerSupplyCard from '@/components/PowerSupplyCard';
import MainLayout from '@/layouts/main.layout';

const PowerSupply = ({ data }) => {
    return (
        <div>
            <div className='container py-4'>
                <h4 className='text-uppercase fw-bold'>power supply</h4>
                <div className="row">
                    {
                        data.map((powerSupply) => <PowerSupplyCard powerSupply={powerSupply} key={powerSupply.id} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default PowerSupply;
PowerSupply.getLayout = function getLayout(page) {
    return <MainLayout>{page}</MainLayout>;
};

export const getStaticProps = async () => {
    const res = await fetch("https://kbutsho-pc-builder-server.vercel.app/power-supply");
    const data = await res.json();
    return {
        props: {
            data: data
        },
        revalidate: 30
    };
};