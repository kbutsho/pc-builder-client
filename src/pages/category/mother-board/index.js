import MotherBoardCard from '@/components/MotherBoardCard';
import MainLayout from '@/layouts/main.layout';

const MotherBoard = ({ data }) => {
    return (
        <div>
            <div className='container py-4'>
                <h4 className='text-uppercase fw-bold'>mother board</h4>
                <div className="row">
                    {
                        data.map((motherboard) => <MotherBoardCard motherboard={motherboard} key={motherboard.id} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default MotherBoard;
MotherBoard.getLayout = function getLayout(page) {
    return <MainLayout>{page}</MainLayout>;
};

export const getStaticProps = async () => {
    const res = await fetch("https://kbutsho-pc-builder-server.vercel.app/mother-board");
    const data = await res.json();
    return {
        props: {
            data: data
        },
        revalidate: 30
    };
};