import React from "react";
import movieData from "../data/MoviesData";

const Row = ({ title }) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4 px-8 text-white">{title}</h2>
      <div className="flex overflow-x-scroll scrollbar-hide space-x-4 px-8 pb-4">
        {movieData.map((movie) => (
          <div 
            key={movie.id} 
            className="flex-none transform transition duration-300 hover:scale-105 hover:z-10 relative group"
          >
            <img
              src={movie.poster}
              alt={movie.title}
              className="w-40 h-56 object-cover rounded hover:opacity-75 transition-opacity"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-end p-2 opacity-0 group-hover:opacity-100">
              <div>
                <p className="text-white font-bold">{movie.title}</p>
                <div className="flex items-center">
                  <span className="text-yellow-400 text-sm">★ {movie.rating}</span>
                  <span className="text-gray-300 text-xs ml-2">{movie.year}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Row;