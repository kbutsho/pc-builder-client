import Header from "@/components/Header";
import HomePageProductCard from "@/components/HomeProductCard";
import MainLayout from "@/layouts/main.layout";
import Link from "next/link";
import { useEffect, useState } from "react";
import cpu from '../images/cpu.png'
import motherboard from '../images/motherboard.png'
import ram from '../images/ram.png'
import storage from '../images/storage.png'
import power from '../images/power.png'
import monitor from '../images/monitor.png'
import Image from "next/image";

const Home = ({ data }) => {
  const [randomData, setRandomData] = useState([]);
  useEffect(() => {
    const shuffledData = data.sort(() => 0.5 - Math.random());
    const selectedData = shuffledData.slice(0, 10);
    setRandomData(selectedData);
  }, [data]);

  const category = [
    {
      name: "CPU",
      url: "/category/cpu",
      image: cpu
    },
    {
      name: "motherboard",
      url: "/category/mother-board",
      image: motherboard
    },
    {
      name: "RAM",
      url: "/category/ram",
      image: ram
    },
    {
      name: "Monitor",
      url: "/category/monitor",
      image: monitor
    },
    {
      name: "Power Supply",
      url: "/category/power-supply",
      image: power
    },
    {
      name: "Storage",
      url: "/category/storage",
      image: storage
    }
  ]
  return (
    <div>
      <Header />
      <div className='container py-4'>

        <div className="category-section py-5">
          <h5 className="fw-bold text-uppercase mb-4">Featured Category</h5>
          <div className="row">
            {category.map((c, index) => (
              <div key={index} className="col-md-2 col-sm-6 ">
                <Link href={c.url} className="category-link">
                  <div className="category-card">
                    <div className="text-center">
                      <Image className="mt-2" src={c.image} height={50} width={50} alt="image"></Image>
                      <h6 className="fw-bold text-center mt-3">{c.name}</h6>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="product-section py-5">
          <h5 className="fw-bold text-uppercase mb-4">Featured PC components</h5>
          <div className="row">
            {randomData.map((data, index) => <HomePageProductCard data={data} key={index} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

Home.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export const getStaticProps = async () => {
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
    },
    revalidate: 30
  };
};
