import Header from "@/components/Header";
import HomePageProductCard from "@/components/HomeProductCard";
import MainLayout from "@/layouts/main.layout";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaExternalLinkAlt } from 'react-icons/fa'

const Home = ({ data }) => {
  const [randomData, setRandomData] = useState([]);

  useEffect(() => {
    const shuffledData = data.sort(() => 0.5 - Math.random());
    const selectedData = shuffledData.slice(0, 12);
    setRandomData(selectedData);
  }, [data]);

  const cpu = randomData.filter((item) => item.category === 'cpu');
  const powerSupply = randomData.filter((item) => item.category === 'power-supply');
  const ram = randomData.filter((item) => item.category === 'ram');
  const storage = randomData.filter((item) => item.category === 'storage');
  const motherBoard = randomData.filter((item) => item.category === 'mother-board');
  const monitor = randomData.filter((item) => item.category === 'monitor');

  const gpu = randomData.filter((item) => item.category === 'gpu');
  const mouse = randomData.filter((item) => item.category === 'mouse');
  const keyboard = randomData.filter((item) => item.category === 'keyboard');
  const headset = randomData.filter((item) => item.category === 'headset');
  return (
    <div>
      <Header />
      <div className='container py-4'>
        <h5 className="fw-bold text-uppercase mt-5">Featured PC components</h5>
        <div className="d-flex justify-content-end">
          <Link href="/category/cpu">
            <h6 className='btn btn-secondary btn-sm componentBtn fw-bold'>
              <span>All CPU</span>
              <FaExternalLinkAlt className="ms-2" style={{ marginBottom: "5px" }} />
            </h6>
          </Link>
        </div>
        {cpu.length > 0 ? (
          <div className="row">
            {cpu.map((data) => (
              <HomePageProductCard data={data} key={data.id} />
            ))}
          </div>
        ) : <h6 className="text-center fw-bold text-danger alert alert-danger my-5">no featured cpu available!</h6>}


        <div className="d-flex justify-content-end">
          <Link href="/category/monitor">
            <h6 className='btn btn-secondary btn-sm componentBtn fw-bold'>
              <span>All monitor</span>
              <FaExternalLinkAlt className="ms-2" style={{ marginBottom: "5px" }} />
            </h6>
          </Link>
        </div>
        {monitor.length > 0 ? (
          <div className="row">
            {monitor.map((data) => (
              <HomePageProductCard data={data} key={data.id} />
            ))}
          </div>
        ) : <h6 className="text-center fw-bold text-danger alert alert-danger my-5">no featured monitor available!</h6>}


        <div className="d-flex justify-content-end">
          <Link href="/category/mother-board">
            <h6 className='btn btn-secondary btn-sm componentBtn fw-bold'>
              <span>All motherboard</span>
              <FaExternalLinkAlt className="ms-2" style={{ marginBottom: "5px" }} />
            </h6>
          </Link>
        </div>
        {motherBoard.length > 0 ? (
          <div className="row">
            {motherBoard.map((data) => (
              <HomePageProductCard data={data} key={data.id} />
            ))}
          </div>
        ) : <h6 className="text-center fw-bold text-danger alert alert-danger my-5">no featured mother board available!</h6>}


        <div className="d-flex justify-content-end">
          <Link href="/category/power-supply">
            <h6 className='btn btn-secondary btn-sm componentBtn fw-bold'>
              <span>All power supply</span>
              <FaExternalLinkAlt className="ms-2" style={{ marginBottom: "5px" }} />
            </h6>
          </Link>
        </div>
        {powerSupply.length > 0 ? (
          <div className="row">
            {powerSupply.map((data) => (
              <HomePageProductCard data={data} key={data.id} />
            ))}
          </div>
        ) : <h6 className="text-center fw-bold text-danger alert alert-danger my-5">no featured power supply available!</h6>}



        <div className="d-flex justify-content-end">
          <Link href="/category/ram">
            <h6 className='btn btn-secondary btn-sm componentBtn fw-bold'>
              <span>All ram</span>
              <FaExternalLinkAlt className="ms-2" style={{ marginBottom: "5px" }} />
            </h6>
          </Link>
        </div>
        {ram.length > 0 ? (
          <div className="row">
            {ram.map((data) => (
              <HomePageProductCard data={data} key={data.id} />
            ))}
          </div>
        ) : <h6 className="text-center fw-bold text-danger alert alert-danger my-5">no featured ram available!</h6>}



        <div className="d-flex justify-content-end">
          <Link href="/category/storage">
            <h6 className='btn btn-secondary btn-sm componentBtn fw-bold'>
              <span>All storage</span>
              <FaExternalLinkAlt className="ms-2" style={{ marginBottom: "5px" }} />
            </h6>
          </Link>
        </div>
        {storage.length > 0 ? (
          <div className="row">
            {storage.map((data) => (
              <HomePageProductCard data={data} key={data.id} />
            ))}
          </div>
        ) : <h6 className="text-center fw-bold text-danger alert alert-danger my-5">no featured storage available!</h6>}


        <div className="d-flex justify-content-end">
          <Link href="/category/others">
            <h6 className='btn btn-secondary btn-sm componentBtn fw-bold'>
              <span>Others</span>
              <FaExternalLinkAlt className="ms-2" style={{ marginBottom: "5px" }} />
            </h6>
          </Link>
        </div>

        {gpu.length > 0 ? (
          <>
            <h6 className='text-uppercase fw-bold'>gpu</h6>
            <div className="row">
              {gpu.map((data) => (
                <HomePageProductCard data={data} key={data.id} />
              ))}
            </div>
          </>
        ) : null}

        {mouse.length > 0 ? (
          <>
            <h6 className='text-uppercase fw-bold'>mouse</h6>
            <div className="row">
              {mouse.map((data) => (
                <HomePageProductCard data={data} key={data.id} />
              ))}
            </div>
          </>
        ) : null}


        {headset.length > 0 ? (
          <>
            <h6 className='text-uppercase fw-bold'>headset</h6>
            <div className="row">
              {headset.map((data) => (
                <HomePageProductCard data={data} key={data.id} />
              ))}
            </div>
          </>
        ) : null}

        {mouse.length > 0 ? (
          <>
            <h6 className='text-uppercase fw-bold'>mouse</h6>
            <div className="row">
              {mouse.map((data) => (
                <HomePageProductCard data={data} key={data.id} />
              ))}
            </div>
          </>
        ) : null}

        {keyboard.length > 0 ? (
          <>
            <h6 className='text-uppercase fw-bold'>keyboard</h6>
            <div className="row">
              {keyboard.map((data) => (
                <HomePageProductCard data={data} key={data.id} />
              ))}
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Home;

Home.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export const getServerSideProps = async () => {
  const response1 = await fetch("https://kbutsho-pc-builder-server.vercel.app/cpu");
  const response2 = await fetch("https://kbutsho-pc-builder-server.vercel.app/mother-board");
  const response3 = await fetch("https://kbutsho-pc-builder-server.vercel.app/ram");
  const response4 = await fetch("https://kbutsho-pc-builder-server.vercel.app/power-supply");
  const response5 = await fetch("https://kbutsho-pc-builder-server.vercel.app/storage");
  const response6 = await fetch("https://kbutsho-pc-builder-server.vercel.app/monitor");
  const response7 = await fetch("https://kbutsho-pc-builder-server.vercel.app/others");
  const data1 = await response1.json();
  const data2 = await response2.json();
  const data3 = await response3.json();
  const data4 = await response4.json();
  const data5 = await response5.json();
  const data6 = await response6.json();
  const data7 = await response7.json();

  const allData = [...data1, ...data2, ...data3, ...data4, ...data5, ...data6, ...data7];
  return {
    props: {
      data: allData
    }
  };
};
