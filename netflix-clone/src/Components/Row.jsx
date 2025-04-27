import React from "react";
import { Link } from "react-router-dom";
import movieData from "../data/MoviesData";

const Row = ({ title }) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4 px-8 text-white">{title}</h2>
      <div className="flex overflow-x-scroll scrollbar-hide space-x-4 px-8 pb-4">
        {movieData.map((movie) => (
          <Link 
            to={`/browse/movie/${movie.id}`} // Correct path format
            key={movie.id}
            className="flex-none w-48 md:w-56 lg:w-64"
          >
            <div className="relative group">
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-full h-full object-cover rounded hover:opacity-75 transition-opacity"
                style={{ aspectRatio: '2/3' }}
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
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Row;