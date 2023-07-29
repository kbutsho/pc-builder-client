import MainLayout from "@/layouts/main.layout";
import dynamic from "next/dynamic";

const Home = ({ data }) => {
  return (
    <div>

      <h1 className="text-center mt-5">product found {data.length}</h1>
    </div>
  );
};

export default Home;

Home.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export const getServerSideProps = async () => {
  const res = await fetch("https://kbutsho-pc-builder-server.vercel.app/cpu");
  const data = await res.json();
  return {
    props: {
      data: data
    }
  };
};
