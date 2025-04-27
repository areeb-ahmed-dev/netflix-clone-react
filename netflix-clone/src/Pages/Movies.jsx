import React from "react";
import Row from "../Components/Row";

const Movies = () => {
  return (
    <div className="pt-24 pb-16"> {/* Adjusted padding for navbar */}
      <h1 className="text-4xl font-bold px-8 mb-8">Movies</h1>
      <Row title="Popular Movies" />
      <Row title="Action Movies" />
      <Row title="Comedies" />
      <Row title="Dramas" />
    </div>
  );
};

export default Movies;