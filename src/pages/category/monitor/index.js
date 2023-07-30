import MonitorCard from '@/components/MonitorCard';
import MainLayout from '@/layouts/main.layout';

const Monitor = ({ data }) => {
    return (
        <div>
            <div className='container py-4'>
                <h4 className='text-uppercase fw-bold'>Monitor</h4>
                <div className="row">
                    {
                        data.map((monitor) => <MonitorCard monitor={monitor} key={monitor.id} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Monitor;
Monitor.getLayout = function getLayout(page) {
    return <MainLayout>{page}</MainLayout>;
};

export const getStaticProps = async () => {
    const res = await fetch("https://kbutsho-pc-builder-server.vercel.app/monitor");
    const data = await res.json();
    return {
        props: {
            data: data
        },
        revalidate: 30
    };
};