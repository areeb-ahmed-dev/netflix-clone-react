import React from 'react';
import { useParams, Link } from 'react-router-dom';
import movieData from '../data/MoviesData';

const MovieDetails = () => {
  const { id } = useParams();
  const movie = movieData.find(m => m.id === parseInt(id));

  if (!movie) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center p-8">
          <h1 className="text-4xl font-bold mb-6">Movie Not Found</h1>
          <Link 
            to="/browse"
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold inline-block"
          >
            Back to Browse
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Backdrop Section - Full Width */}
      <div className="relative w-full h-screen"> {/* Changed to h-screen */}
        {/* Backdrop Image with Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img 
          src={movie.poster} 
          alt={movie.title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Content Container */}
        <div className="relative z-20 h-full flex items-center">
          <div className="container mx-auto px-4 md:px-8 max-w-6xl">
            <div className="bg-black/80 p-8 rounded-lg backdrop-blur-sm">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">{movie.title}</h1>
              
              <div className="flex items-center mb-6">
                <span className="bg-red-600 text-white px-3 py-1 rounded mr-4 text-sm md:text-base">
                  ★ {movie.rating}
                </span>
                <span className="text-gray-300">{movie.year} • {movie.runtime || '120'} min</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {movie.genre.map(g => (
                  <span key={g} className="px-3 py-1 bg-gray-800 rounded-full text-sm">
                    {g}
                  </span>
                ))}
              </div>

              <p className="text-lg mb-8 max-w-3xl">{movie.plot}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div>
                  <h3 className="text-xl font-bold mb-4">Details</h3>
                  <p className="mb-2"><strong>Director:</strong> {movie.director}</p>
                  <p><strong>Cast:</strong> {movie.actors.join(', ')}</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Info</h3>
                  <p className="mb-2"><strong>Awards:</strong> {movie.awards}</p>
                  <p><strong>Box Office:</strong> {movie.boxOffice}</p>
                </div>
              </div>

              <div className="flex space-x-4">
                <button className="bg-red-600 hover:bg-red-700 text-red-700 px-8 py-3 rounded-lg font-bold">
                  ▶ Play
                </button>
                <button className="bg-gray-800 hover:bg-gray-700 text-red-700 px-8 py-3 rounded-lg font-bold">
                  + My List
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;