import OthersCard from '@/components/OthersCard';
import MainLayout from '@/layouts/main.layout';

const Others = ({ data }) => {
    const gpuData = data.filter((item) => item.category === 'gpu');
    const mouseData = data.filter((item) => item.category === 'mouse');
    const keyboardData = data.filter((item) => item.category === 'keyboard');
    const headsetData = data.filter((item) => item.category === 'headset');
    return (
        <div>
            <div className='container py-4'>
                <h4 className="text-uppercase fw-bold mt-4">GPU</h4>
                <div className="row">
                    {gpuData.map((others) => (
                        <OthersCard others={others} key={others.id} />
                    ))}
                </div>
                <h4 className="text-uppercase fw-bold mt-4">Mouse</h4>
                <div className="row">
                    {mouseData.map((others) => (
                        <OthersCard others={others} key={others.id} />
                    ))}
                </div>
                <h4 className="text-uppercase fw-bold mt-4">Keyboard</h4>
                <div className="row">
                    {keyboardData.map((others) => (
                        <OthersCard others={others} key={others.id} />
                    ))}
                </div>
                <h4 className="text-uppercase fw-bold mt-4">Headset</h4>
                <div className="row">
                    {headsetData.map((others) => (
                        <OthersCard others={others} key={others.id} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Others;
Others.getLayout = function getLayout(page) {
    return <MainLayout>{page}</MainLayout>;
};

export const getStaticProps = async () => {
    const res = await fetch("https://kbutsho-pc-builder-server.vercel.app/others");
    const data = await res.json();
    return {
        props: {
            data: data
        },
        revalidate: 30
    };
};