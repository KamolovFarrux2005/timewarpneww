import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import PageRoute from "../components/PageRoute";

const Home = ({ data }) => {
  return (
    <div className="home">
      <Navbar />
      <div className="home__content">
        <Sidebar data={data} />
        <div className="home__main">
          <PageRoute />
        </div>
      </div>
    </div>
  );
};

export default Home;
