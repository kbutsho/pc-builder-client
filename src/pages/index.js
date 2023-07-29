import MainLayout from "@/layouts/main.layout";

const Home = ({ data }) => {
  return (
    <div>

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
