import RamCard from '@/components/RamCard';
import MainLayout from '@/layouts/main.layout';

const Ram = ({ data }) => {
    return (
        <div>
            <div className='container py-4'>
                <h4 className='text-uppercase fw-bold'>Ram</h4>
                <div className="row">
                    {
                        data.map((ram) => <RamCard ram={ram} key={ram.id} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Ram;
Ram.getLayout = function getLayout(page) {
    return <MainLayout>{page}</MainLayout>;
};

export const getStaticProps = async () => {
    const res = await fetch("https://kbutsho-pc-builder-server.vercel.app/ram");
    const data = await res.json();
    return {
        props: {
            data: data
        },
        revalidate: 30
    };
};