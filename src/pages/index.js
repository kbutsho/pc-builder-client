import MainLayout from "@/layouts/main.layout";

const Home = ({ data }) => {
  return (
    <div>
      {data ? (
        <h1 className="text-center mt-5">product found {data.length}</h1>
      )
        : (
          <div className="d-flex justify-content-center align-items-center" style={{ color: "red", minHeight: "85vh" }}>
            <h3 className="fw-bold">loading...</h3>
          </div>
        )}
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
