import Image from 'next/image';
import Link from 'next/link';

const CpuCard = (params) => {
    const { name, image, category, status, price, averageRating } = params.cpu
    return (
        <div className='col-lg-2 col-12'>
            <div style={{
                minHeight: "300px",
                borderRadius: "10px",
                background: "white",
                boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                margin: "20px 0",
                padding: "20px"
            }}>
                <div className="text-center">
                    <Image className='text-center pt-3' src={image} alt="img" width={120} height={120} responsive={true} />
                </div>
                <h6 className='my-4'>{name}</h6>
                <ul className='list-unstyled' style={{ fontSize: "14px" }}>
                    <li><small>{category}</small></li>
                    <li><small>price {price}</small></li>
                    <li><small>{status}</small></li>
                    <li><small>rating {averageRating} </small></li>
                </ul>
                <Link href="/" className='btn btn-primary btn-sm w-100 fw-bold'>details</Link>
            </div>
        </div>
    );
};

export default CpuCard;