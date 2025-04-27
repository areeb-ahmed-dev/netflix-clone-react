import React from "react";
import Row from "../Components/Row";

const MyList = () => {
  return (
    <div className="pt-24 pb-16">
      <h1 className="text-4xl font-bold px-8 mb-8">My List</h1>
      <Row title="Saved Titles" />
      <Row title="Watch Again" />
    </div>
  );
};

export default MyList;