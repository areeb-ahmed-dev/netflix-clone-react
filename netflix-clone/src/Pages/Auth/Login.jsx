import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NetflixLogo from '../../Components/NetflixLogo';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic
    console.log({ email, password });
    navigate('/browse');
  };

  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Header */}
      <header className="pt-6 px-8">
        <Link to="/">
          <NetflixLogo className="h-8 md:h-10 text-red-600" />
        </Link>
      </header>

      {/* Centered Form */}
      <main className="flex-grow flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-xl">
          <h1 className="text-3xl font-bold mb-8 text-gray-900">Sign Up</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 bg-gray-100 rounded text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 bg-gray-100 rounded text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-red-700 py-3 rounded font-bold transition-colors"
            >
              Sign Up
            </button>
          </form>

          <div className="mt-6 text-gray-600">
            <span>Already have an account? </span>
            <Link to="/signin" className="text-red-600 hover:underline font-medium">
              Sign in now
            </Link>
          </div>

          <p className="mt-8 text-sm text-gray-500">
            This page is protected by Google reCAPTCHA to ensure you're not a bot.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black py-8 px-8 text-gray-400 text-sm">
        <div className="max-w-6xl mx-auto">
          <p>Questions? Call 1-844-505-2993</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            <a href="#" className="hover:underline">FAQ</a>
            <a href="#" className="hover:underline">Help Center</a>
            <a href="#" className="hover:underline">Terms of Use</a>
            <a href="#" className="hover:underline">Privacy</a>
          </div>
          <p className="mt-8">© {new Date().getFullYear()} Netflix Clone</p>
        </div>
      </footer>
    </div>
  );
};

export default Login;