import React from "react";
import Landing from "../components/Landing.jsx";
import Highlights from "../components/Highlights.jsx";
import Featured from "../components/Featured.jsx";
import CheapestBooks from "../components/CheapestBooks.jsx";
import Explore from "../components/Explore.jsx";

const Home = () => {
  return (
    <>
      <Landing />
      <main>
        <Highlights />
        <Featured />
        <CheapestBooks />
        <Explore />
      </main>
    </>
  );
};

export default Home;
