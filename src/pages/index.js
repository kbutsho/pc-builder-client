import HomePageProductCard from "@/components/HomeProductCard";
import MainLayout from "@/layouts/main.layout";
import { useEffect, useState } from "react";

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
      <div className='container py-4'>
        <h5 className="fw-bold text-uppercase text-center alert alert-primary w-100">Featured PC component</h5>
        {cpu.length > 0 ? (
          <>
            <h5 className='text-uppercase fw-bold'>CPU</h5>
            <div className="row">
              {cpu.map((data) => (
                <HomePageProductCard data={data} key={data.id} />
              ))}
            </div>
          </>
        ) : null}
        {monitor.length > 0 ? (
          <>
            <h5 className='text-uppercase fw-bold'>monitor</h5>
            <div className="row">
              {monitor.map((data) => (
                <HomePageProductCard data={data} key={data.id} />
              ))}
            </div>
          </>
        ) : null}
        {motherBoard.length > 0 ? (
          <>
            <h5 className='text-uppercase fw-bold'>mother board</h5>
            <div className="row">
              {motherBoard.map((data) => (
                <HomePageProductCard data={data} key={data.id} />
              ))}
            </div>
          </>
        ) : null}
        {ram.length > 0 ? (
          <>
            <h5 className='text-uppercase fw-bold'>ram</h5>
            <div className="row">
              {ram.map((data) => (
                <HomePageProductCard data={data} key={data.id} />
              ))}
            </div>
          </>
        ) : null}
        {powerSupply.length > 0 ? (
          <>
            <h5 className='text-uppercase fw-bold'>power supply</h5>
            <div className="row">
              {powerSupply.map((data) => (
                <HomePageProductCard data={data} key={data.id} />
              ))}
            </div>
          </>
        ) : null}
        {storage.length > 0 ? (
          <>
            <h5 className='text-uppercase fw-bold'>storage</h5>
            <div className="row">
              {storage.map((data) => (
                <HomePageProductCard data={data} key={data.id} />
              ))}
            </div>
          </>
        ) : null}
        {gpu.length > 0 ? (
          <>
            <h5 className='text-uppercase fw-bold'>gpu</h5>
            <div className="row">
              {gpu.map((data) => (
                <HomePageProductCard data={data} key={data.id} />
              ))}
            </div>
          </>
        ) : null}
        {headset.length > 0 ? (
          <>
            <h5 className='text-uppercase fw-bold'>headset</h5>
            <div className="row">
              {headset.map((data) => (
                <HomePageProductCard data={data} key={data.id} />
              ))}
            </div>
          </>
        ) : null}
        {mouse.length > 0 ? (
          <>
            <h5 className='text-uppercase fw-bold'>mouse</h5>
            <div className="row">
              {mouse.map((data) => (
                <HomePageProductCard data={data} key={data.id} />
              ))}
            </div>
          </>
        ) : null}
        {keyboard.length > 0 ? (
          <>
            <h5 className='text-uppercase fw-bold'>keyboard</h5>
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
