import Image from 'next/image';
import Link from 'next/link';
import { AiFillStar } from 'react-icons/ai'

const RamCard = (params) => {
    const { name, image, category, status, price, averageRating, id } = params.cpu
    return (
        <div className='col-lg-2 col-12'>
            <div className='card'>
                <div className="text-center py-2">
                    <Image src={image} alt="img" width={120} height={120} responsive={true} />
                </div>
                <h6 className='my-2'>{name}</h6>
                <ul className='list-unstyled' style={{ fontSize: "15px" }}>
                    <li><small>{category}</small></li>
                    <li><small>price {price}</small></li>
                    <li><small>{status}</small></li>
                    <li><small>rating {averageRating}</small><AiFillStar color="red" style={{ fontSize: "14px", margin: "0 0 2px 3px" }} /></li>
                </ul>
                <Link href={`/category/ram/${id}`} className='btn btn-primary btn-sm w-100 fw-bold'>details</Link>
            </div>
        </div>
    );
};

export default RamCard;