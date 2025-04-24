import React from "react";
import Navbar from "../Components/Navbar";
import Row from "../Components/Row";

const Home = () => {
  return (
    <div className="bg-black text-white min-h-screen w-full overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative pt-20">
        <div className="relative w-full h-[60vh] bg-gradient-to-b from-black/40 via-black/10 to-black">
          <div className="absolute inset-0 bg-[url('https://image.tmdb.org/t/p/original/9PqD3wSIjntyJDBzMNuxuKHwpUD.jpg')] bg-cover bg-center"></div>
          
          <div className="absolute bottom-0 left-0 p-8 md:p-16 max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">NETFLIX</h1>
            <p className="text-lg mb-6">All your favorite movies in one place</p>
            <div className="flex gap-4">
              <button className="bg-white hover:bg-gray-200 text-black px-6 py-2 rounded">
                ▶ Play
              </button>
              <button className="bg-gray-600/70 hover:bg-gray-500/70 text-white px-6 py-2 rounded">
                ℹ More Info
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Movie Rows - Just showing all movies in different categories */}
      <div className="mt-8 pb-16">
        <Row title="Trending Now" />
        <Row title="Popular Movies" />
        <Row title="Award Winners" />
        <Row title="Staff Picks" />
      </div>
    </div>
  );
};

export default Home;