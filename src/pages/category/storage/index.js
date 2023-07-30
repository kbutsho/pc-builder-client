import StorageCard from '@/components/StorageCard';
import MainLayout from '@/layouts/main.layout';

const Storage = ({ data }) => {
    return (
        <div>
            <div className='container py-4'>
                <h4 className='text-uppercase fw-bold'>storage</h4>
                <div className="row">
                    {
                        data.map((storage) => <StorageCard storage={storage} key={storage.id} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Storage;
Storage.getLayout = function getLayout(page) {
    return <MainLayout>{page}</MainLayout>;
};

export const getStaticProps = async () => {
    const res = await fetch("https://kbutsho-pc-builder-server.vercel.app/storage");
    const data = await res.json();
    return {
        props: {
            data: data
        },
        revalidate: 30
    };
};