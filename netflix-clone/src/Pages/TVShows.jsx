import React from "react";
import Row from "../Components/Row";

const TVShows = () => {
  return (
    <div className="pt-24 pb-16">
      <h1 className="text-4xl font-bold px-8 mb-8">TV Shows</h1>
      <Row title="Popular Series" />
      <Row title="New Releases" />
      <Row title="Bingeworthy Shows" />
    </div>
  );
};

export default TVShows;