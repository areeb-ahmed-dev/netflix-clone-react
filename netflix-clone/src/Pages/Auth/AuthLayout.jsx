import React from 'react';
import { Link } from 'react-router-dom';
import NetflixLogo from '../../Components/NetflixLogo';

const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <header className="py-4 px-8">
        <Link to="/">
          <NetflixLogo className="h-8 md:h-10" />
        </Link>
      </header>

      {/* Content */}
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-black/80 rounded-lg p-8 md:p-12">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black/80 py-6 px-8 text-gray-400 text-sm">
        <div className="max-w-6xl mx-auto">
          <p>Questions? Call 1-844-505-2993</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            <a href="#">FAQ</a>
            <a href="#">Help Center</a>
            <a href="#">Terms of Use</a>
            <a href="#">Privacy</a>
          </div>
          <p className="mt-8">© 2023 Netflix Clone</p>
        </div>
      </footer>
    </div>
  );
};

export default AuthLayout;