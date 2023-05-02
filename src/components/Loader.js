import ReactLoading from "react-loading";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <ReactLoading type="balls" color="#6B7280" height={'10%'} width={'10%'} />
    </div>
  );
};

export default Loader;