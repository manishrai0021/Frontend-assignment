import React from "react";
import Products from "../components/Products";

const Home = () => {
  return (
    <div className="pb-16 pt-4 px-16 flex flex-col gap-8">
      <div className="px-16 sm:px-44 py-6">
        <h1 className="text-[42px] font-semibold ">Home</h1>
      </div>
      <Products />
    </div>
  );
};

export default Home;